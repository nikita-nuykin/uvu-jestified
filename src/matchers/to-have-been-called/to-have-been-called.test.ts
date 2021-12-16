import { describe } from '../../describe/describe';
import { fn } from '../../fn/fn';
import { throwsAssertionError } from '../../utils/trows-assertion';
import { toHaveBeenCalled } from './to-have-been-called';

describe('toHaveBeenCalled', (it) => {
  it('function was called', () => {
    const func = fn();
    func();
    toHaveBeenCalled(func);
  });

  it('function was not called', () => {
    const func = fn();
    throwsAssertionError(() => toHaveBeenCalled(func));
  });
});
