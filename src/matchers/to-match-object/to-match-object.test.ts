import { describe } from '../../describe/describe';
import { throwsAssertionError } from '../../utils/trows-assertion';
import { toMatchObject } from './to-match-object';

const baseObject = { a: 1, b: { c: '2' } };

describe('toMatchObject', (it) => {
  it('Different values -> error', () => {
    throwsAssertionError(() => toMatchObject(baseObject, { ...baseObject, a: '1' }));
  });

  it('Expected more fields -> error', () => {
    throwsAssertionError(() => toMatchObject(baseObject, { ...baseObject, d: '1' }));
  });

  it('Expected less fields -> success', () => {
    toMatchObject({ ...baseObject, d: '1' }, baseObject);
  });

  it('Same object -> success', () => {
    toMatchObject(baseObject, baseObject);
  });

  it('Deep copy -> success', () => {
    toMatchObject(baseObject, { ...baseObject, b: { ...baseObject.b } });
  });
});
