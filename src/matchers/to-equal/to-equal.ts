import { toBeAlgo } from '../to-be/to-be';
import { assert } from '../../utils/assert';
import { toMatchObjectAlgo } from '../to-match-object/to-match-object';

export function toEqualAlgo(value: unknown, expected: unknown): boolean {
  const valueIsObject = typeof value == 'object';
  const expectedIsObject = typeof expected == 'object';

  if (!valueIsObject || !expectedIsObject) return toBeAlgo(value, expected);

  return (
    toMatchObjectAlgo(value, expected) && toMatchObjectAlgo(expected, value)
  );
}

export function toEqual(
  value: unknown,
  expected: unknown,
  errorMessage?: string,
): void {
  const result = toEqualAlgo(value, expected);
  if (result) return;

  const generated = !errorMessage;
  assert({
    value,
    expected,
    message: errorMessage,
    generated,
    operator: 'toEqual',
  });
}
