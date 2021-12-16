import { test } from 'uvu';
import { equal } from 'uvu/assert';
import { describe } from './describe';

let value = 1;

describe('Describe works as expected', (it) => {
  it('Test', () => {
    equal(++value, 2);
  });
});

test('Checks if test inside describe was executed', () => {
  equal(value, 2);
});

test.run();
