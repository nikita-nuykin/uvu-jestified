import { assert } from '../../utils/assert';

export function toBeNull(actual: unknown, errorMessage?: string): void {
  const result = actual === null;
  if (result) return;

  const generated = !errorMessage;
  assert({ actual, message: errorMessage, generated, operator: 'toBe' });
}
