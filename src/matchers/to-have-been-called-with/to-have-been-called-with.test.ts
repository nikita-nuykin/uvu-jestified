import { it } from '../../it/it';
import { fn } from '../../fn/fn';
import { throwsAssertionError } from '../../utils/trows-assertion';
import { toHaveBeenCalledWith } from './to-have-been-called-with';

it('toHaveBeenCalledWith', () => {
  const func = fn();
  func(1);
  func(2);
  func(3);
  toHaveBeenCalledWith(func, 1);
  toHaveBeenCalledWith(func, 2);
  toHaveBeenCalledWith(func, 3);
  throwsAssertionError(() => toHaveBeenCalledWith(func));
  throwsAssertionError(() => toHaveBeenCalledWith(func, 4));
  throwsAssertionError(() => toHaveBeenCalledWith(func, 4, 5));
});
