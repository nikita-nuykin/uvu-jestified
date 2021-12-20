export interface MockFunction {
  (...args: unknown[]): void;
  getCalledWith: () => unknown[][];
  getReturned: () => unknown[];
}

export type MockFunctionInnerFunc = (...args: unknown[]) => unknown;

export function isMockFunction(func: unknown): func is MockFunction {
  return (
    !!func &&
    typeof func === 'object' &&
    'getReturned' in func &&
    'getCalledWith' in func
  );
}

class Mock {
  private readonly calledWith: unknown[][] = [];

  private readonly returned: unknown[] = [];

  private readonly innerFunc: MockFunctionInnerFunc;

  constructor(innerFunc: MockFunctionInnerFunc) {
    this.innerFunc = innerFunc;
  }

  public call(...args: unknown[]): void {
    this.calledWith.push(args);

    const result = this.innerFunc(args);
    this.returned.push(result);
  }

  public getCalledWith(): unknown[][] {
    return this.calledWith;
  }

  public getReturned(): unknown[] {
    return this.returned;
  }

  public static create(innerFunc: MockFunctionInnerFunc): MockFunction {
    const instance = new Mock(innerFunc);

    return Object.assign((...args: unknown[]) => instance.call(...args), {
      getCalledWith: () => instance.getCalledWith(),
      getReturned: () => instance.getReturned(),
    });
  }
}

export function fn(innerFunc: MockFunctionInnerFunc = () => {}): MockFunction {
  return Mock.create(innerFunc);
}
