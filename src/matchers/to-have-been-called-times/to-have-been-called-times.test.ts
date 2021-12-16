import { describe } from '../../describe/describe';
import { fn } from '../../fn/fn';
import { throwsAssertionError } from '../../utils/trows-assertion';
import { toHaveBeenCalledTimes } from './to-have-been-called-times';

describe('toHaveBeenCalledTimes', (it) => {
  it('Right answer', () => {
    const func = fn();
    func();
    func();
    func();
    toHaveBeenCalledTimes(func, 3);
  });

  it('function was not called', () => {
    const func = fn();
    func();
    throwsAssertionError(() => toHaveBeenCalledTimes(func, 4));
  });
});
