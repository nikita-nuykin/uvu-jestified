import { assert } from '../../utils/assert';

export function toBeTruthy(value: unknown, errorMessage?: string): void {
  const result = !!value;
  if (result) return;

  const generated = !errorMessage;
  assert({ value, message: errorMessage, generated, operator: 'toBe' });
}
