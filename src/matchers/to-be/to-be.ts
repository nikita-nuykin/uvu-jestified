import { assert } from '../../utils/assert';

export function toBeAlgo<T>(value: T, expected: T): boolean {
  return Object.is(value, expected);
}

export function toBe<T>(value: T, expected: T, errorMessage?: string): void {
  const result = toBeAlgo(value, expected);
  if (result) return;

  const generated =  !errorMessage;
  assert({ value, expected, message: errorMessage, generated, operator: 'toBe' });
}
