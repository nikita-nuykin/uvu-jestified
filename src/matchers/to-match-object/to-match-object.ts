import { toBeAlgo } from '../to-be/to-be';

export type MatchObject = Record<string, unknown>;

// TODO: optimization is required
export function toMatchObjectAlgo(value: MatchObject, expected: MatchObject): boolean {
  for (let key of Object.keys(value)) {
    const vKeyIsObject = typeof value[key] === 'object';
    const eKeyIsObject = typeof expected[key] === 'object';

    if (vKeyIsObject !== eKeyIsObject) return false;

    if (vKeyIsObject && eKeyIsObject) {
      if (toMatchObjectAlgo(value[key] as MatchObject, expected[key] as MatchObject)) {
        continue;
      }
      return false;
    }

    if (!toBeAlgo(value[key], expected[key])) return false;
  }
  return true;
}