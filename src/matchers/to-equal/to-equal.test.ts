import { describe } from '../../describe/describe';
import { throwsAssertionError } from '../../utils/trows-assertion';
import { toEqual } from './to-equal';

describe('toEqual', (it) => {
  it('Numbers', () => {
    toEqual(1, 1);
    throwsAssertionError(() => toEqual(1, 2));
  });

  it('Strings', () => {
    toEqual('asdf', 'asdf');
    throwsAssertionError(() => toEqual('asdf', 'qwerty'));
  });

  it('Objects', () => {
    toEqual({ x: 1, y: { z: 'x' } }, { x: 1, y: { z: 'x' } });
    throwsAssertionError(() =>
      toEqual({ x: 1, y: { z: 'x' } }, { x: 1, y: { z: 'z' } }),
    );
    throwsAssertionError(() =>
      toEqual({ x: 1, y: { z: 'x' } }, { x: 1, y: { z: 'x', d: 'a' } }),
    );
    throwsAssertionError(() =>
      toEqual({ x: 1, y: { z: 'x', d: 'a' } }, { x: 1, y: { z: 'x' } }),
    );
  });
});
