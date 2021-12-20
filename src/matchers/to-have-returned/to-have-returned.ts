import { MockFunction } from '../../fn/fn';
import { assert } from '../../utils/assert';

export function toHaveReturned(func: MockFunction): void {
  const result = func.getReturned().length > 0;
  if (result) return;

  assert({
    actual: result,
    generated: true,
    operator: 'toHaveReturned',
  });
}
