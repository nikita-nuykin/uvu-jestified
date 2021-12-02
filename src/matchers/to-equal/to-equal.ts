import { toBeAlgo } from '../to-be/to-be';
import { assert } from '../../utils/assert';
import { MatchObject, toMatchObjectAlgo } from '../to-match-object/to-match-object';

export function toEqualAlgo<T>(value: T, expected: T): boolean {
  const valueIsObject = typeof value == 'object';
  const expectedIsObject = typeof expected == 'object';

  if (!valueIsObject || !expectedIsObject) return toBeAlgo(value, expected);

  return toMatchObjectAlgo(value as MatchObject, expected as MatchObject)
    && toMatchObjectAlgo(expected as MatchObject, value as MatchObject);
}

export function toEqual<T>(value: T, expected: T, errorMessage?: string): void {
  const result = toEqualAlgo(value, expected);
  if (result) return;

  const generated =  !errorMessage;
  assert({ value, expected, message: errorMessage, generated, operator: 'toEqual' });
}
