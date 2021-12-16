import { assert } from '../../utils/assert';

export function toBeTruthy(actual: unknown, errorMessage?: string): void {
  const result = !!actual;
  if (result) return;

  const generated = !errorMessage;
  assert({ actual, message: errorMessage, generated, operator: 'toBe' });
}
