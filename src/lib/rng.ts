// Mulberry32 PRNG (deterministic but sufficient for demo)
export function mulberry32(seed: number) {
  return function() {
    let t = (seed += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

let demoRng: (() => number) | null = null;
export function getDemoRng() {
  if (!demoRng) demoRng = mulberry32(Date.now() % 2147483647);
  return demoRng;
}
