import { it } from '../../it/it';
import { fn } from '../../fn/fn';
import { throwsAssertionError } from '../../utils/trows-assertion';
import { toHaveLastReturnedWith } from './to-have-last-returned-with';

it('toHaveLastReturnedWith', () => {
  let i = 0;
  const func = fn(() => i++);
  func();
  toHaveLastReturnedWith(func, 0);

  func();
  toHaveLastReturnedWith(func, 1);

  func();
  toHaveLastReturnedWith(func, 2);

  throwsAssertionError(() => toHaveLastReturnedWith(func, 0));
  throwsAssertionError(() => toHaveLastReturnedWith(func, 1));
  throwsAssertionError(() => toHaveLastReturnedWith(func, 3));
});
