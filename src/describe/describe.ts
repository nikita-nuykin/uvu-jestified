import { suite as uvuSuite } from 'uvu';
import { UvuSuite } from '../types';

export type DescribedContent = (suite: UvuSuite) => void;

export type SetupFunction = () => void | Promise<void>;

export interface SetupOptions {
  beforeAll?: SetupFunction;
  beforeEach?: SetupFunction;
  afterEach?: SetupFunction;
  afterAll?: SetupFunction;
}

function setupOptions(suite: UvuSuite, options: SetupOptions) {
  if (options.beforeAll) {
    suite.before(options.beforeAll);
  }
  if (options.beforeEach) {
    suite.before.each(options.beforeEach);
  }
  if (options.afterEach) {
    suite.after.each(options.afterEach);
  }
  if (options.afterAll) {
    suite.after(options.afterAll);
  }
}

export function describe(name: string, described: DescribedContent): void;
export function describe(name: string, options: SetupOptions, content: DescribedContent): void;

export function describe(
  name: string,
  optionsOrContent: SetupOptions | DescribedContent,
  contentOptional?: DescribedContent,
): void {
  const suite = uvuSuite(name);

  if (contentOptional) {
    setupOptions(suite, optionsOrContent as SetupOptions);
    contentOptional(suite);
  } else {
    const content = optionsOrContent as DescribedContent;
    content(suite);
  }

  suite.run();
}

export function createDescribe(options?: SetupOptions) {
  return (name: string, described: DescribedContent) => describe(name, options || {}, described);
}
