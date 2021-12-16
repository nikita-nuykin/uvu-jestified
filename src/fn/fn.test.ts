import { test } from 'uvu';
import { equal } from 'uvu/assert';

import { fn } from './fn';

test('fn has been called', () => {
  const func = fn();
  func();
  equal(func.hasBeenCalled(), true);
});

test('fn has not been called', () => {
  const func = fn();
  equal(func.hasBeenCalled(), false);
});
