import { isMockFunction, MockFunction } from '../fn/fn';
import {
  toBe,
  toBeTruthy,
  toBeNull,
  toEqual,
  toMatchObject,
  toStrictEqual,
  toHaveBeenCalled,
  toHaveBeenCalledTimes,
  toHaveBeenCalledWith,
  toHaveBeenLastCalledWith,
  toHaveBeenNthCalledWith,
} from '../matchers';
import { ExpectedMatchers, ExpectedMatchersForMockFunction } from './types';

function getExpectedMatchers(actual: unknown): ExpectedMatchers {
  return {
    toBe: (expects: unknown) => toBe(actual, expects),
    toBeTruthy: () => toBeTruthy(actual),
    toBeNull: () => toBeNull(actual),
    toEqual: (expects: unknown) => toEqual(actual, expects),
    toMatchObject: (expects: unknown) => toMatchObject(actual, expects),
    toStrictEqual: (expects: unknown) => toStrictEqual(actual, expects),
  };
}

function getExpectedMatchersForMockFunction(
  actual: MockFunction,
): ExpectedMatchersForMockFunction {
  return {
    toBe: (expects: unknown) => toBe(actual, expects),
    toBeTruthy: () => toBeTruthy(actual),
    toBeNull: () => toBeNull(actual),
    toEqual: (expects: unknown) => toEqual(actual, expects),
    toMatchObject: (expects: unknown) => toMatchObject(actual, expects),
    toStrictEqual: (expects: unknown) => toStrictEqual(actual, expects),

    toHaveBeenCalled: () => toHaveBeenCalled(actual),
    toBeCalled: () => toHaveBeenCalled(actual),

    toHaveBeenCalledTimes: (amount: number) =>
      toHaveBeenCalledTimes(actual, amount),
    toBeCalledTimes: (amount: number) => toHaveBeenCalledTimes(actual, amount),

    toHaveBeenCalledWith: (...args: unknown[]) =>
      toHaveBeenCalledWith(actual, ...args),
    toBeCalledWith: (...args: unknown[]) =>
      toHaveBeenCalledWith(actual, ...args),

    toHaveBeenLastCalledWith: (...args: unknown[]) =>
      toHaveBeenLastCalledWith(actual, ...args),
    lastCalledWith: (...args: unknown[]) =>
      toHaveBeenLastCalledWith(actual, ...args),

    toHaveBeenNthCalledWith: (nthCall: number, ...args: unknown[]) =>
      toHaveBeenNthCalledWith(actual, nthCall, ...args),
    nthCalledWith: (nthCall: number, ...args: unknown[]) =>
      toHaveBeenNthCalledWith(actual, nthCall, ...args),
  };
}

export function expect(actual: unknown): ExpectedMatchers;
export function expect(actual: MockFunction): ExpectedMatchersForMockFunction;

export function expect(
  actual: unknown | MockFunction,
): ExpectedMatchers | ExpectedMatchersForMockFunction {
  if (isMockFunction(actual)) return getExpectedMatchersForMockFunction(actual);
  return getExpectedMatchers(actual);
}
