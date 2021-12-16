export interface MockFunction {
  (): void;
  hasBeenCalled: () => boolean;
  hasBeenCalledTimes: () => number;
}

class Mock {
  private calledTimes: number = 0;

  public call(): void {
    this.calledTimes += 1;
  }

  public hasBeenCalled(): boolean {
    return this.calledTimes > 0;
  }

  public hasBeenCalledTimes(): number {
    return this.calledTimes;
  }

  public static create(): MockFunction {
    const instance = new Mock();
    return Object.assign(() => instance.call(), {
      hasBeenCalled: () => instance.hasBeenCalled(),
      hasBeenCalledTimes: () => instance.hasBeenCalledTimes(),
    });
  }
}

export function fn(): MockFunction {
  return Mock.create();
}
