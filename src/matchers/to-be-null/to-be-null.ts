import { assert } from '../../utils/assert';

export function toBeNull(value: unknown, errorMessage?: string): void {
  const result = value === null;
  if (result) return;

  const generated = !errorMessage;
  assert({ value, message: errorMessage, generated, operator: 'toBe' });
}
