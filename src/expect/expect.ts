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
} from '../matchers';

export interface ExpectedMatchers {
  toBe: (expects: unknown) => void;
  toBeTruthy: () => void;
  toBeNull: () => void;
  toEqual: (expects: unknown) => void;
  toMatchObject: (expects: unknown) => void;
  toStrictEqual: (expects: unknown) => void;
}

export interface ExpectedMatchersForMockFunction extends ExpectedMatchers {
  toHaveBeenCalled: () => void;
  toBeCalled: () => void;
  toHaveBeenCalledTimes: (amount: number) => void;
  toBeCalledTimes: (amount: number) => void;
  toHaveBeenCalledWith: (...args: unknown[]) => void;
  toBeCalledWith: (...args: unknown[]) => void;
}

export function expect(actual: unknown): ExpectedMatchers;
export function expect(actual: MockFunction): ExpectedMatchersForMockFunction;

export function expect(
  actual: unknown | MockFunction,
): ExpectedMatchers | ExpectedMatchersForMockFunction {
  const result: any = {
    toBe: (expects: unknown) => toBe(actual, expects),
    toBeTruthy: () => toBeTruthy(actual),
    toBeNull: () => toBeNull(actual),
    toEqual: (expects: unknown) => toEqual(actual, expects),
    toMatchObject: (expects: unknown) => toMatchObject(actual, expects),
    toStrictEqual: (expects: unknown) => toStrictEqual(actual, expects),
  };

  if (isMockFunction(actual)) {
    result.toHaveBeenCalled = () => toHaveBeenCalled(actual as MockFunction);
    result.toBeCalled = () => toHaveBeenCalled(actual as MockFunction);
    result.toHaveBeenCalledTimes = (amount: number) =>
      toHaveBeenCalledTimes(actual as MockFunction, amount);
    result.toBeCalledTimes = (amount: number) =>
      toHaveBeenCalledTimes(actual as MockFunction, amount);
    result.toHaveBeenCalledWith = (...args: unknown[]) =>
      toHaveBeenCalledWith(actual, ...args);
    result.toBeCalledWith = result.toHaveBeenCalledWith;
  }
  return result;
}
