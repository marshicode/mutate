import { createClient } from 'jsr:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

function rng() {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  return arr[0] / 4294967296;
}

function weightedRarity(weights: Record<string, number>): string {
  const entries = Object.entries(weights);
  const total = entries.reduce((s, [, w]) => s + w, 0);
  let r = rng() * total;
  for (const [rarity, w] of entries) {
    if ((r -= w) <= 0) return rarity;
  }
  return entries[entries.length - 1][0];
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const authHeader = req.headers.get('authorization') ?? '';
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: userErr } = await supabase.auth.getUser(token);
    if (userErr || !user) throw new Error('Unauthorized');

    const { packId, currency } = await req.json();
    if (!packId || !['credits', 'residue'].includes(currency)) throw new Error('Invalid payload');

    const { data: pack } = await supabase.from('pack_config').select('*').eq('id', packId).single();
    if (!pack) throw new Error('Pack not found');

    const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();
    if (!profile) throw new Error('Profile not found');

    const cost = currency === 'credits' ? pack.cost_credits : pack.cost_residue;
    const balanceKey = currency === 'credits' ? 'credits' : 'residue';
    if (profile[balanceKey] < cost) throw new Error('Insufficient balance');

    const odds: Record<string, number> = pack.odds as Record<string, number>;
    let pityTriggered = false;
    if (packId === 'spore' && profile.pity >= 9) {
      odds.epic = (odds.epic || 0) + (odds.common || 0) + (odds.rare || 0);
      odds.common = 0;
      odds.rare = 0;
      pityTriggered = true;
    }

    const drawnIds: string[] = [];
    for (let i = 0; i < pack.cards; i++) {
      const r = weightedRarity(odds);
      const { data: candidates } = await supabase.from('card_catalog').select('id').eq('rarity', r);
      const pool = candidates ?? [];
      if (pool.length === 0) throw new Error('Catalog empty for rarity ' + r);
      drawnIds.push(pool[Math.floor(rng() * pool.length)]!.id);
    }

    // floor enforcement
    if (pack.floor_rarity) {
      const rarityOrder = ['common','rare','epic','legendary','mythic'];
      const fi = rarityOrder.indexOf(pack.floor_rarity);
      for (let i = 0; i < drawnIds.length; i++) {
        const { data: cardRow } = await supabase.from('card_catalog').select('rarity').eq('id', drawnIds[i]).single();
        if (cardRow && rarityOrder.indexOf(cardRow.rarity) < fi) {
          const { data: floorCandidates } = await supabase.from('card_catalog').select('id').eq('rarity', pack.floor_rarity);
          const pool = floorCandidates ?? [];
          if (pool.length) drawnIds[i] = pool[Math.floor(rng() * pool.length)]!.id;
        }
      }
    }

    // dupe residue
    const { data: existing } = await supabase.from('cards').select('card_id').eq('user_id', user.id);
    const owned = new Set((existing ?? []).map((x: any) => x.card_id));
    let extraResidue = 0;
    const residueMap: Record<string, number> = { common:5, rare:15, epic:40, legendary:120, mythic:300 };

    for (const cid of drawnIds) {
      const { data: c } = await supabase.from('card_catalog').select('rarity').eq('id', cid).single();
      if (owned.has(cid)) {
        extraResidue += Math.round((residueMap[c!.rarity] || 0) * 0.5);
      } else {
        owned.add(cid);
      }
    }

    // insert cards
    const inserts = drawnIds.map(card_id => ({
      user_id: user.id,
      card_id,
      rarity: pack.floor_rarity ?? 'common',
      source: packId,
    }));
    // Need actual rarity per card; fetch them
    const { data: catRows } = await supabase.from('card_catalog').select('id,rarity').in('id', drawnIds);
    const rarityById = Object.fromEntries((catRows ?? []).map((c: any) => [c.id, c.rarity]));
    const finalInserts = drawnIds.map(card_id => ({
      user_id: user.id,
      card_id,
      rarity: rarityById[card_id] || 'common',
      source: packId,
    }));
    const { error: insErr } = await supabase.from('cards').insert(finalInserts);
    if (insErr) throw insErr;

    // update profile
    const nextPity = pityTriggered ? 0 : (packId === 'spore' ? profile.pity + 1 : profile.pity);
    const { error: profErr } = await supabase.from('profiles').update({
      [balanceKey]: profile[balanceKey] - cost,
      residue: profile.residue + extraResidue,
      packs_opened: profile.packs_opened + 1,
      pity: nextPity,
    }).eq('id', user.id);
    if (profErr) throw profErr;

    // activity
    const { data: drawnCards } = await supabase.from('card_catalog').select('*').in('id', drawnIds);
    const label = `Opened ${pack.name} — ${(drawnCards ?? []).map((c: any) => c.name).join(', ')}`;
    await supabase.from('activity').insert({ user_id: user.id, type: 'pack', label });

    return new Response(JSON.stringify({ cards: drawnCards ?? [], pityTriggered }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
