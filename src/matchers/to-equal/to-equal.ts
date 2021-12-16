import { toBeAlgo } from '../to-be/to-be';
import { assert } from '../../utils/assert';
import { toMatchObjectAlgo } from '../to-match-object/to-match-object';

export function toEqualAlgo(actual: unknown, expects: unknown): boolean {
  const valueIsObject = typeof actual == 'object';
  const expectedIsObject = typeof expects == 'object';

  if (!valueIsObject || !expectedIsObject) return toBeAlgo(actual, expects);

  return (
    toMatchObjectAlgo(actual, expects) && toMatchObjectAlgo(expects, actual)
  );
}

export function toEqual(
  actual: unknown,
  expects: unknown,
  errorMessage?: string,
): void {
  const result = toEqualAlgo(actual, expects);
  if (result) return;

  const generated = !errorMessage;
  assert({
    actual,
    expects,
    message: errorMessage,
    generated,
    operator: 'toEqual',
  });
}
