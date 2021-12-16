import { it } from '../../it/it';
import { fn } from '../../fn/fn';
import { throwsAssertionError } from '../../utils/trows-assertion';
import { toHaveBeenLastCalledWith } from './to-have-been-last-called-with';

it('toHaveBeenCalledWith', () => {
  const func = fn();
  func(1);
  toHaveBeenLastCalledWith(func, 1);

  func(2);
  toHaveBeenLastCalledWith(func, 2);

  func(3);
  toHaveBeenLastCalledWith(func, 3);

  throwsAssertionError(() => toHaveBeenLastCalledWith(func));
  throwsAssertionError(() => toHaveBeenLastCalledWith(func, 1));
  throwsAssertionError(() => toHaveBeenLastCalledWith(func, 2));
  throwsAssertionError(() => toHaveBeenLastCalledWith(func, 4));
  throwsAssertionError(() => toHaveBeenLastCalledWith(func, 4, 5));
});
