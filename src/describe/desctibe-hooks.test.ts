import { test } from 'uvu';
import { equal } from 'uvu/assert';
import { describe } from './describe';

let value = '';

const beforeAll = () => {value += 'BA';};
const beforeEach = async () => {value += '_BE';};
const afterEach = () => {value += '_AE';};
const afterAll = async () => {value += '_AA';};
const options = { beforeAll, beforeEach, afterEach, afterAll };

describe('Describe with setup hooks', options, (it) => {
  it('First test', () => {
    equal(value, 'BA_BE');
    value += '_test1';
  });

  it('Second test', () => {
    equal(value, 'BA_BE_test1_AE_BE');
    value += '_test2';
  });
});

test('Test final value', () => {
  equal(value, 'BA_BE_test1_AE_BE_test2_AE_AA');
});
test.run();
