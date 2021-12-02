import { describe } from '../../describe/describe';
import { throwsAssertionError } from '../../utils/trows-assertion';
import { toBe } from './to-be';

describe('Numbers', (it) => {
  it('Same numbers', () => {
    toBe(1, 1);
  });

  it('Different numbers', () => {
    throwsAssertionError(() => toBe(1, 2));
  });
});

describe('Strings', (it) => {
  it('Same strings', () => {
    toBe('1234', '1234');
  });

  it('Different strings', () => {
    throwsAssertionError(() => toBe('1234', '12345'));
  });
});

describe('Objects', (it) => {
  it('Same objects', () => {
    throwsAssertionError(() => toBe({ x: 1 }, { x: 1 }));
  });

  it('Different objects', () => {
    throwsAssertionError(() => toBe({ x: 1 }, { x: 2 }));
  });
});
