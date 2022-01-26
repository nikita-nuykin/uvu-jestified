import { assert } from '../../utils/assert';

export function toBeFalsy(actual: unknown, errorMessage?: string): void {
  const result = !actual;
  if (result) return;

  const generated = !errorMessage;
  assert({ actual, message: errorMessage, generated, operator: 'toBeFalsy' });
}
