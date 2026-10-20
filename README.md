# MUTATE

A dark-themed specimen card collection game. Collect, splice, ascend.

## Stack
- Vite + React 18 + TypeScript
- Hand-rolled CSS (no UI framework)
- Self-hosted fonts (Space Grotesk, JetBrains Mono)
- Supabase (optional) for auth + cloud persistence

## Game systems
- **20 crypto meme characters** across 5 rarities, each with an original
  flat-vector portrait (DOGE, SHIB, PEPE, TRUMP, WIF, FLOKI, BONK, BRETT,
  POPCAT, MOG, WOJAK, TURBO, NEIRO, PONKE, TROLL, ANDY, SLERF, MICHI,
  SATOSHI, VITALIK)
- **3 pack types** with floor rarities and published odds
- **Pity**: every 10th Spore Pack without Epic+ guarantees an Epic
- **Fusion**: 3 cards of the same rarity → 1 guaranteed card of the next rarity
- **Economy**: Credits buy packs; duplicates grant Residue; Residue can also buy packs

## Using real artwork
The shipped art is original vector illustration. To use official images instead,
drop files into `public/art/` and add `artUrl` to that card in
`src/data/cards.tsx`:

```ts
{ id: 'doge', name: 'DOGE', /* … */ artUrl: '/art/doge.png' }
```

Cards render the image with `object-fit: cover`; no other changes needed.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Supabase setup (optional)
1. Create a Supabase project
2. Copy `.env.example` to `.env` and fill `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY`
3. Run `supabase/schema.sql` in the SQL Editor
4. Deploy Edge Functions:
   - `supabase/functions/open-pack`
   - `supabase/functions/fuse-cards`
5. The app auto-detects config and switches from Demo to Cloud mode

## Demo mode
If Supabase is not configured, the app runs entirely in the browser with a labelled **Demo save** (localStorage). All game logic works identically.
