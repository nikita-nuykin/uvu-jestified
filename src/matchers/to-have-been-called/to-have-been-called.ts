import { MockFunction } from '../../fn/fn';
import { assert } from '../../utils/assert';

export function toHaveBeenCalled(
  func: MockFunction,
  errorMessage?: string,
): void {
  const result = func.hasBeenCalled();
  if (result) return;

  const generated = !errorMessage;
  assert({
    actual: result,
    message: errorMessage,
    generated,
    operator: 'toHaveBeenCalled',
  });
}
