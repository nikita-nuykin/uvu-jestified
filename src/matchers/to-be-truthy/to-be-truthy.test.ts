import { describe } from '../../describe/describe';
import { throwsAssertionError } from '../../utils/trows-assertion';
import { toBeTruthy } from './to-be-truthy';

describe('toBeTruthy', (it) => {
  it('value is false', () => {
    throwsAssertionError(() => toBeTruthy(false));
  });

  it('value is 0', () => {
    throwsAssertionError(() => toBeTruthy(0));
  });

  it('value is empty string', () => {
    throwsAssertionError(() => toBeTruthy(''));
  });

  it('value is null', () => {
    throwsAssertionError(() => toBeTruthy(null));
  });

  it('value is undefined', () => {
    throwsAssertionError(() => toBeTruthy(undefined));
  });

  it('value is NaN', () => {
    throwsAssertionError(() => toBeTruthy(NaN));
  });

  it('value is number', () => {
    toBeTruthy(1);
  });

  it('value is non empty string', () => {
    toBeTruthy('1234');
  });

  it('value is object', () => {
    toBeTruthy({ x: 1 });
  });
});
