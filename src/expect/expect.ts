import {
  toBe,
  toBeTruthy,
  toBeNull,
  toEqual,
  toMatchObject,
  toStrictEqual,
} from '../matchers';

export interface ExpectedMatchers {
  toBe: (expects: unknown) => void;
  toBeTruthy: () => void;
  toBeNull: () => void;
  toEqual: (expects: unknown) => void;
  toMatchObject: (expects: unknown) => void;
  toStrictEqual: (expects: unknown) => void;
}

export function expect(actual: unknown): ExpectedMatchers {
  return {
    toBe: (expects: unknown) => toBe(actual, expects),
    toBeTruthy: () => toBeTruthy(actual),
    toBeNull: () => toBeNull(actual),
    toEqual: (expects: unknown) => toEqual(actual, expects),
    toMatchObject: (expects: unknown) => toMatchObject(actual, expects),
    toStrictEqual: (expects: unknown) => toStrictEqual(actual, expects),
  };
}
