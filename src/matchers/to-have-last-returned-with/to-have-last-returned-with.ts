import { MockFunction } from '../../fn/fn';
import { assert } from '../../utils/assert';
import { toBeAlgo } from '../to-be/to-be';

export function toHaveLastReturnedWith(
  func: MockFunction,
  expects: unknown,
): void {
  const returned = func.getReturned();
  let last: unknown | undefined;
  if (returned.length) {
    last = returned[returned.length - 1];
    const result = toBeAlgo(last, expects);
    if (result) return;
  }

  assert({
    actual: last,
    expects,
    generated: false,
    operator: 'toHaveLastReturnedWith',
  });
}
