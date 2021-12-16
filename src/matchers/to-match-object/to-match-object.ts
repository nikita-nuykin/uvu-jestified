import { assert } from '../../utils/assert';
import { toBeAlgo } from '../to-be/to-be';

// TODO: optimization is required
export function toMatchObjectAlgo(value: unknown, expected: unknown): boolean {
  if (typeof value !== 'object' || typeof expected !== 'object') {
    assert({
      value,
      expected,
      message: 'value or expected value is not an object',
      generated: true,
      operator: 'toMatchObject',
    });
  }

  if (value === null || expected === null) {
    return value === expected;
  }

  for (let key of Object.keys(expected)) {
    const valueOfValueByKey = (value as Record<string, unknown>)[key];
    const valueOfExpectedByKey = (expected as Record<string, unknown>)[key];

    const vKeyIsObject = typeof valueOfExpectedByKey === 'object';
    const eKeyIsObject = typeof valueOfValueByKey === 'object';

    if (vKeyIsObject !== eKeyIsObject) return false;

    if (vKeyIsObject && eKeyIsObject) {
      if (toMatchObjectAlgo(valueOfExpectedByKey, valueOfValueByKey)) {
        continue;
      }
      return false;
    }

    if (!toBeAlgo(valueOfExpectedByKey, valueOfValueByKey)) return false;
  }
  return true;
}

export function toMatchObject(
  value: unknown,
  expected: unknown,
  errorMessage?: string,
): void {
  const result = toMatchObjectAlgo(value, expected);
  if (result) return;

  const generated = !errorMessage;
  assert({
    value,
    expected,
    message: errorMessage,
    generated,
    operator: 'toMatchObject',
  });
}
