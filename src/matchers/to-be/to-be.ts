import { assert } from '../../utils/assert';

export function toBeAlgo(value: unknown, expected: unknown): boolean {
  return Object.is(value, expected);
}

export function toBe(
  value: unknown,
  expected: unknown,
  errorMessage?: string,
): void {
  const result = toBeAlgo(value, expected);
  if (result) return;

  const generated = !errorMessage;
  assert({
    value,
    expected,
    message: errorMessage,
    generated,
    operator: 'toBe',
  });
}
