import { Assertion } from 'uvu/assert';
import { stringify } from './stringify';

export interface AssertProps {
  value?: any;
  expected?: any;
  operator: string;
  message?: string;
  generated: boolean;
}

const defaultMessage = 'There was an error :(';

export function assert(props: AssertProps): never {
  let message = '';
  if ('value' in props) {
    message += `Value: "${stringify(props.value)}".`;
  }
  if ('expected' in props) {
    if (message) message += ' ';
    message += `Expected: "${stringify(props.expected)}".`;
  }

  throw new Assertion({
    actual: props.value,
    expects: props.expected,
    operator: props.operator,
    message: message || defaultMessage,
    generated: props.generated,
  });
}