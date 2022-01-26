import { it } from '../../it/it';
import { throwsAssertionError } from '../../utils/trows-assertion';
import { toBeFalsy } from './to-be-falsy';

it('toBeFalsy', () => {
  throwsAssertionError(() => toBeFalsy(true));
  throwsAssertionError(() => toBeFalsy(1));
  throwsAssertionError(() => toBeFalsy('123'));
  throwsAssertionError(() => toBeFalsy({ x: 1 }));

  toBeFalsy(null);
  toBeFalsy(undefined);
  toBeFalsy(NaN);
  toBeFalsy('');
  toBeFalsy(0);
});
