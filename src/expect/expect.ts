import { toBe, toBeTruthy, toBeNull, toEqual } from '../matchers';

export interface ExpectedMatchers<T> {
  toBe: (expected: T) => void;
  toBeTruthy: () => void;
  toBeNull: () => void;
  toEqual: (expected: T) => void;
}

export function expect<T>(value: T): ExpectedMatchers<T> {
  return {
    toBe: (expected: T) => toBe(value, expected),
    toBeTruthy: () => toBeTruthy(value),
    toBeNull: () => toBeNull(value),
    toEqual: (expected: T) => toEqual(value, expected),
  };
}
