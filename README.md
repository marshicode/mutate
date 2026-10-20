# MUTATE

A dark-themed specimen card collection game. Collect, splice, ascend.

## Stack
- Vite + React 18 + TypeScript
- Hand-rolled CSS (no UI framework)
- Self-hosted fonts (Space Grotesk, JetBrains Mono)
- Supabase (optional) for auth + cloud persistence

## Game systems
- **20 specimen designs** across 5 rarities, each with unique SVG art
- **3 pack types** with floor rarities and published odds
- **Pity**: every 10th Spore Pack without Epic+ guarantees an Epic
- **Fusion**: 3 cards of the same rarity → 1 guaranteed card of the next rarity
- **Economy**: Credits buy packs; duplicates grant Residue; Residue can also buy packs

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
