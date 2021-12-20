import { MockFunction } from '../../fn/fn';
import { assert } from '../../utils/assert';
import { toBeAlgo } from '../to-be/to-be';

export function toHaveBeenNthCalledWith(
  func: MockFunction,
  nthCall: number,
  ...expects: unknown[]
): void {
  const calledWith = func.getCalledWith();
  let args: unknown[] | undefined;
  if (calledWith.length >= nthCall && nthCall > 0) {
    args = calledWith[nthCall - 1];
    const result: boolean =
      args.length === expects.length &&
      args.every((arg, i) => toBeAlgo(arg, expects[i]));
    if (result) return;
  }

  assert({
    actual: args,
    expects,
    generated: false,
    operator: 'toHaveBeenNthCalledWith',
  });
}
