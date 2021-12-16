import { assert } from '../../utils/assert';

export function toStrictEqual(
  value: unknown,
  expected: unknown,
  errorMessage?: string,
): void {
  const result = value === expected;
  if (result) return;

  const generated = !errorMessage;
  assert({
    value,
    expected,
    message: errorMessage,
    generated,
    operator: 'toStrictEqual',
  });
}
