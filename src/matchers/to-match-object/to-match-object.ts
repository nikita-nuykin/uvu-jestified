import { assert } from '../../utils/assert';
import { toBeAlgo } from '../to-be/to-be';

export type MatchObject = Record<string, unknown>;

// TODO: optimization is required
export function toMatchObjectAlgo(value: MatchObject, expected: MatchObject): boolean {
  if (typeof value !== 'object' || typeof expected !== 'object') {
    assert({
      value,
      expected,
      message: 'value or expected value is not an object',
      generated: true,
      operator: 'toMatchObject',
    });
  }

  for (let key of Object.keys(expected)) {
    const vKeyIsObject = typeof expected[key] === 'object';
    const eKeyIsObject = typeof value[key] === 'object';

    if (vKeyIsObject !== eKeyIsObject) return false;

    if (vKeyIsObject && eKeyIsObject) {
      if (toMatchObjectAlgo(expected[key] as MatchObject, value[key] as MatchObject)) {
        continue;
      }
      return false;
    }

    if (!toBeAlgo(expected[key], value[key])) return false;
  }
  return true;
}

export function toMatchObject(
  value: MatchObject,
  expected: MatchObject,
  errorMessage?: string,
): void {
  const result = toMatchObjectAlgo(value, expected);
  if (result) return;

  const generated =  !errorMessage;
  assert({ value, expected, message: errorMessage, generated, operator: 'toMatchObject' });
}
