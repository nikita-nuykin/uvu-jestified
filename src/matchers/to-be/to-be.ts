import { assert } from '../../utils/assert';

export function toBeAlgo(actual: unknown, expects: unknown): boolean {
  return Object.is(actual, expects);
}

export function toBe(
  actual: unknown,
  expects: unknown,
  errorMessage?: string,
): void {
  const result = toBeAlgo(actual, expects);
  if (result) return;

  const generated = !errorMessage;
  assert({
    actual,
    expects,
    message: errorMessage,
    generated,
    operator: 'toBe',
  });
}
