import { test } from 'uvu';

export function it(name: string, func: () => void) {
  test(name, func);
  test.run();
}
