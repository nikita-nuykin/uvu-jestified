import { equal } from 'uvu/assert';

export function throwsAssertionError(fn: () => void): void {
  try {
    fn();
    throw new Error();
  } catch (error) {
    equal((error as Error).name === 'Assertion', true);
  }
}
