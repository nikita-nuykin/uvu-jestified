import {
  toBe,
  toBeTruthy,
  toBeNull,
  toEqual,
  toMatchObject,
  toStrictEqual,
} from '../matchers';

export interface ExpectedMatchers {
  toBe: (expected: unknown) => void;
  toBeTruthy: () => void;
  toBeNull: () => void;
  toEqual: (expected: unknown) => void;
  toMatchObject: (expected: unknown) => void;
  toStrictEqual: (expected: unknown) => void;
}

export function expect(value: unknown): ExpectedMatchers {
  return {
    toBe: (expected: unknown) => toBe(value, expected),
    toBeTruthy: () => toBeTruthy(value),
    toBeNull: () => toBeNull(value),
    toEqual: (expected: unknown) => toEqual(value, expected),
    toMatchObject: (expected: unknown) => toMatchObject(value, expected),
    toStrictEqual: (expected: unknown) => toStrictEqual(value, expected),
  };
}
