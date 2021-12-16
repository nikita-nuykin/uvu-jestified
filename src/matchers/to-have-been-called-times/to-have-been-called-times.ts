import { MockFunction } from '../../fn/fn';
import { assert } from '../../utils/assert';

export function toHaveBeenCalledTimes(
  func: MockFunction,
  expects: number,
  errorMessage?: string,
): void {
  const result = func.hasBeenCalledTimes();
  if (result === expects) return;

  const generated = !errorMessage;
  assert({
    actual: result,
    expects,
    message: errorMessage,
    generated,
    operator: 'toHaveBeenCalledTimes',
  });
}
