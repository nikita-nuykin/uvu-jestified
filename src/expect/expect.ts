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
  toHaveBeenLastCalledWith: (...args: unknown[]) => void;
  lastCalledWith: (...args: unknown[]) => void;
  toHaveBeenNthCalledWith: (nthCall: number, ...args: unknown[]) => void;
  nthCalledWith: (nthCall: number, ...args: unknown[]) => void;
}

export function expect(actual: unknown): ExpectedMatchers;
export function expect(actual: MockFunction): ExpectedMatchersForMockFunction;

export function expect(
  actual: unknown | MockFunction,
): ExpectedMatchers | ExpectedMatchersForMockFunction {
  const result: ExpectedMatchers = {
    toBe: (expects: unknown) => toBe(actual, expects),
    toBeTruthy: () => toBeTruthy(actual),
    toBeNull: () => toBeNull(actual),
    toEqual: (expects: unknown) => toEqual(actual, expects),
    toMatchObject: (expects: unknown) => toMatchObject(actual, expects),
    toStrictEqual: (expects: unknown) => toStrictEqual(actual, expects),
  };

  if (!isMockFunction(actual)) return result;

  const resultForMockFunction: ExpectedMatchersForMockFunction =
    result as ExpectedMatchersForMockFunction;

  resultForMockFunction.toHaveBeenCalled = () =>
    toHaveBeenCalled(actual as MockFunction);
  resultForMockFunction.toBeCalled = () =>
    toHaveBeenCalled(actual as MockFunction);
  resultForMockFunction.toHaveBeenCalledTimes = (amount: number) =>
    toHaveBeenCalledTimes(actual as MockFunction, amount);
  resultForMockFunction.toBeCalledTimes = (amount: number) =>
    toHaveBeenCalledTimes(actual as MockFunction, amount);
  resultForMockFunction.toHaveBeenCalledWith = (...args: unknown[]) =>
    toHaveBeenCalledWith(actual, ...args);
  resultForMockFunction.toBeCalledWith =
    resultForMockFunction.toHaveBeenCalledWith;
  resultForMockFunction.toHaveBeenLastCalledWith = (...args: unknown[]) =>
    toHaveBeenLastCalledWith(actual, ...args);
  resultForMockFunction.lastCalledWith =
    resultForMockFunction.toHaveBeenLastCalledWith;
  resultForMockFunction.toHaveBeenNthCalledWith = (
    nthCall: number,
    ...args: unknown[]
  ) => toHaveBeenNthCalledWith(actual, nthCall, ...args);
  resultForMockFunction.nthCalledWith =
    resultForMockFunction.toHaveBeenNthCalledWith;
  return resultForMockFunction;
}
