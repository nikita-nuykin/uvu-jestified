import { MockFunction } from '../../fn/fn';
import { assert } from '../../utils/assert';
import { toBeAlgo } from '../to-be/to-be';

export function toHaveBeenLastCalledWith(
  func: MockFunction,
  ...expects: unknown[]
): void {
  const calledWith = func.getCalledWith();
  let last: unknown[] | undefined;
  if (calledWith.length) {
    last = calledWith[calledWith.length - 1];
    const result: boolean = last.every((arg, i) => toBeAlgo(arg, expects[i]));
    if (result) return;
  }

  assert({
    actual: last,
    expects,
    generated: false,
    operator: 'toHaveBeenLastCalledWith',
  });
}
