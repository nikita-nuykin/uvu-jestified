import { it } from '../../it/it';
import { fn } from '../../fn/fn';
import { throwsAssertionError } from '../../utils/trows-assertion';
import { toHaveBeenNthCalledWith } from './to-have-been-nth-called-with';

it('toHaveBeenCalledWith', () => {
  const func = fn();
  func(1);
  toHaveBeenNthCalledWith(func, 1, 1);

  func(2);
  toHaveBeenNthCalledWith(func, 1, 1);
  toHaveBeenNthCalledWith(func, 2, 2);

  func(3);
  toHaveBeenNthCalledWith(func, 1, 1);
  toHaveBeenNthCalledWith(func, 2, 2);
  toHaveBeenNthCalledWith(func, 3, 3);

  throwsAssertionError(() => toHaveBeenNthCalledWith(func, 1));
  throwsAssertionError(() => toHaveBeenNthCalledWith(func, -1));
  throwsAssertionError(() => toHaveBeenNthCalledWith(func, 2, 1));
  throwsAssertionError(() => toHaveBeenNthCalledWith(func, 2, 2, 3));
});
