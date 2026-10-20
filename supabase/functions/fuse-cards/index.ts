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

    const { uids } = await req.json();
    if (!Array.isArray(uids) || uids.length !== 3) throw new Error('Select exactly 3 cards');

    const { data: selected } = await supabase.from('cards').select('*').eq('user_id', user.id).in('uid', uids);
    if (!selected || selected.length !== 3) throw new Error('Invalid selection');

    const rarities = new Set((selected as any[]).map((x: any) => x.rarity));
    if (rarities.size !== 1) throw new Error('All 3 must be the same rarity');
    const currentRarity = (selected as any[])[0].rarity as string;
    if (currentRarity === 'mythic') throw new Error('Mythic specimens cannot be spliced');

    const rarityOrder = ['common','rare','epic','legendary','mythic'];
    const nextIdx = rarityOrder.indexOf(currentRarity) + 1;
    if (nextIdx >= rarityOrder.length) throw new Error('Cannot ascend further');
    const targetRarity = rarityOrder[nextIdx];

    // delete consumed cards
    const { error: delErr } = await supabase.from('cards').delete().eq('user_id', user.id).in('uid', uids);
    if (delErr) throw delErr;

    // roll new card
    const { data: candidates } = await supabase.from('card_catalog').select('*').eq('rarity', targetRarity);
    const pool = candidates ?? [];
    if (pool.length === 0) throw new Error('No candidates for ' + targetRarity);
    const card = pool[Math.floor(rng() * pool.length)] as any;

    // insert new card
    const { error: insErr } = await supabase.from('cards').insert({
      user_id: user.id,
      card_id: card.id,
      rarity: card.rarity,
      source: 'fusion',
    });
    if (insErr) throw insErr;

    // activity
    await supabase.from('activity').insert({
      user_id: user.id,
      type: 'fusion',
      label: `Fused 3 specimens into ${card.name} (${card.rarity.toUpperCase()})`,
    });

    return new Response(JSON.stringify({ card }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
