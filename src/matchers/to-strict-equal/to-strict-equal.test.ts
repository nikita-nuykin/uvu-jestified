import { describe } from '../../describe/describe';
import { throwsAssertionError } from '../../utils/trows-assertion';
import { toStrictEqual } from './to-strict-equal';

describe('toStrictEqual', (it) => {
  it("11 !== '11'", () => {
    throwsAssertionError(() => toStrictEqual(11, '11'));
  });

  it('{} !== {}', () => {
    throwsAssertionError(() => toStrictEqual({}, {}));
  });

  it('1 === 1', () => {
    toStrictEqual(1, 1);
  });
});
