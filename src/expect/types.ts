export interface ExpectedMatchers {
  toBe: (expects: unknown) => void;
  toBeTruthy: () => void;
  toBeFalsy: () => void;
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
  toHaveReturned: () => void;
  toReturn: () => void;
  toHaveReturnedTimes: (times: number) => void;
  toReturnTimes: (times: number) => void;
  toHaveLastReturnedWith: (expects: unknown) => void;
  lastReturnedWith: (expects: unknown) => void;
}
