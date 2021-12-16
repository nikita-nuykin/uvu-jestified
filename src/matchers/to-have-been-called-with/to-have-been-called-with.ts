import { MockFunction } from '../../fn/fn';
import { assert } from '../../utils/assert';
import { toBeAlgo } from '../to-be/to-be';

export function toHaveBeenCalledWith(
  func: MockFunction,
  ...expects: unknown[]
): void {
  const result: boolean = func.getCalledWith().some((args) => {
    return args.every((arg, i) => toBeAlgo(arg, expects[i]));
  });

  if (result) return;

  assert({
    actual: result,
    expects,
    generated: false,
    operator: 'toHaveBeenCalledWith',
  });
}
