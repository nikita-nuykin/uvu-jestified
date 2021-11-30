import { test } from 'uvu';
import { equal } from 'uvu/assert';
import { it } from './it';

let value = 1;

it('Test', () => {
  equal(++value, 2);
});

test('Check if test was executed', () => {
  equal(value, 2);
});
test.run();
