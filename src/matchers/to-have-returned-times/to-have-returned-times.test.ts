import { describe } from '../../describe/describe';
import { fn } from '../../fn/fn';
import { throwsAssertionError } from '../../utils/trows-assertion';
import { toHaveReturnedTimes } from './to-have-returned-times';

describe('toHaveReturnedTimes', (it) => {
  it('function was called', () => {
    const func = fn(() => 1);
    func();

    toHaveReturnedTimes(func, 1);
    throwsAssertionError(() => toHaveReturnedTimes(func, 2));
    throwsAssertionError(() => toHaveReturnedTimes(func, -2));
  });

  it('function was not called', () => {
    const func = fn(() => 1);

    toHaveReturnedTimes(func, 0);
    throwsAssertionError(() => toHaveReturnedTimes(func, -1));
  });

  it('function throws error', () => {
    const func = fn(() => {
      throw new Error();
    });
    const wrapper = () => {
      try {
        func();
      } catch {
        // pass
      }
    };
    wrapper();

    toHaveReturnedTimes(func, 0);
    throwsAssertionError(() => toHaveReturnedTimes(func, 1));
  });
});
