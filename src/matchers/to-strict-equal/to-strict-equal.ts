import { assert } from '../../utils/assert';

export function toStrictEqual(
  actual: unknown,
  expects: unknown,
  errorMessage?: string,
): void {
  const result = actual === expects;
  if (result) return;

  const generated = !errorMessage;
  assert({
    actual,
    expects,
    message: errorMessage,
    generated,
    operator: 'toStrictEqual',
  });
}
