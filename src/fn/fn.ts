interface MockFunction {
  (): void;
  hasBeenCalled: () => boolean;
}

class Mock {
  private calledTimes: number = 0;

  public call(): void {
    this.calledTimes += 1;
  }

  public hasBeenCalled(): boolean {
    return this.calledTimes > 0;
  }

  public static create(): MockFunction {
    const instance = new Mock();
    return Object.assign(() => instance.call(), {
      hasBeenCalled: () => instance.hasBeenCalled(),
    });
  }
}

export function fn(): MockFunction {
  return Mock.create();
}
