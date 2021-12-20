import { describe } from '../../describe/describe';
import { fn } from '../../fn/fn';
import { throwsAssertionError } from '../../utils/trows-assertion';
import { toHaveReturned } from './to-have-returned';

describe('toHaveReturned', (it) => {
  it('function was called', () => {
    const func = fn(() => 1);
    func();
    toHaveReturned(func);
  });

  it('function was not called', () => {
    const func = fn(() => 1);
    throwsAssertionError(() => toHaveReturned(func));
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

    throwsAssertionError(() => toHaveReturned(func));
  });
});
