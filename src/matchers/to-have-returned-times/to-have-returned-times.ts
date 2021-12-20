import { MockFunction } from '../../fn/fn';
import { assert } from '../../utils/assert';

export function toHaveReturnedTimes(func: MockFunction, times: number): void {
  const result = func.getReturned().length === times;
  if (result) return;

  assert({
    actual: result,
    generated: true,
    operator: 'toHaveReturnedTimes',
  });
}
