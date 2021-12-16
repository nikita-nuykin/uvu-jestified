import {
  toBe,
  toBeTruthy,
  toBeNull,
  toEqual,
  toMatchObject,
  MatchObject,
  toStrictEqual,
} from '../matchers';

export interface ExpectedMatchers<T> {
  toBe: (expected: T) => void;
  toBeTruthy: () => void;
  toBeNull: () => void;
  toEqual: (expected: T) => void;
  toMatchObject: (expected: MatchObject) => void;
  toStrictEqual: (expected: unknown) => void;
}

export function expect<T>(value: T): ExpectedMatchers<T> {
  return {
    toBe: (expected: T) => toBe(value, expected),
    toBeTruthy: () => toBeTruthy(value),
    toBeNull: () => toBeNull(value),
    toEqual: (expected: T) => toEqual(value, expected),
    toMatchObject: (expected: MatchObject) =>
      toMatchObject(value as MatchObject, expected),
    toStrictEqual: (expected: unknown) => toStrictEqual(value, expected),
  };
}
