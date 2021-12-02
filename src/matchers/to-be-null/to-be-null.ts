import { assert } from '../../utils/assert';

export function toBeNull<T>(value: T, errorMessage?: string): void {
  const result = value === null;
  if (result) return;

  const generated =  !errorMessage;
  assert({ value, message: errorMessage, generated, operator: 'toBe' });
}
