import { suite as uvuSuite } from 'uvu';
import { UvuSuite } from '../types';

export type DescribedContent = (suite: UvuSuite) => void;

export function describe(name: string, described: DescribedContent) {
  const suite = uvuSuite(name);
  described(suite);
  suite.run();
}
