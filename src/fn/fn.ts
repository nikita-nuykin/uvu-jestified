export interface MockFunction {
  (...args: unknown[]): void;
  getCalledTimes: () => number;
  getCalledWith: () => unknown[][];
}

export function isMockFunction(func: unknown): func is MockFunction {
  return (
    !!func &&
    typeof func === 'object' &&
    'getCalledTimes' in func &&
    'getCalledWith' in func
  );
}

class Mock {
  private calledTimes: number = 0;

  private calledWith: unknown[][] = [];

  public call(...args: unknown[]): void {
    this.calledTimes += 1;
    this.calledWith.push(args);
  }

  public getCalledTimes(): number {
    return this.calledTimes;
  }

  public getCalledWith(): unknown[][] {
    return this.calledWith;
  }

  public static create(): MockFunction {
    const instance = new Mock();
    return Object.assign((...args: unknown[]) => instance.call(...args), {
      getCalledTimes: () => instance.getCalledTimes(),
      getCalledWith: () => instance.getCalledWith(),
    });
  }
}

export function fn(): MockFunction {
  return Mock.create();
}
