import { assert } from '../../utils/assert';
import { toBeAlgo } from '../to-be/to-be';

// TODO: optimization is required
export function toMatchObjectAlgo(actual: unknown, expects: unknown): boolean {
  if (typeof actual !== 'object' || typeof expects !== 'object') {
    assert({
      actual,
      expects,
      message: 'Actual or expected value is not an object',
      generated: true,
      operator: 'toMatchObject',
    });
  }

  if (actual === null || expects === null) {
    return actual === expects;
  }

  for (let key of Object.keys(expects)) {
    const valueOfValueByKey = (actual as Record<string, unknown>)[key];
    const valueOfExpectedByKey = (expects as Record<string, unknown>)[key];

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
  actual: unknown,
  expects: unknown,
  errorMessage?: string,
): void {
  const result = toMatchObjectAlgo(actual, expects);
  if (result) return;

  const generated = !errorMessage;
  assert({
    actual,
    expects,
    message: errorMessage,
    generated,
    operator: 'toMatchObject',
  });
}
