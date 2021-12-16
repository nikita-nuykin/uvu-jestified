import { Assertion } from 'uvu/assert';
import { stringify } from './stringify';

export interface AssertProps {
  actual?: any;
  expects?: any;
  operator: string;
  message?: string;
  generated: boolean;
}

const defaultMessage = 'There was an error :(';

export function assert(props: AssertProps): never {
  let message = '';
  if ('actual' in props) {
    message += `Actual: "${stringify(props.actual)}".`;
  }
  if ('expects' in props) {
    if (message) message += ' ';
    message += `Expects: "${stringify(props.expects)}".`;
  }

  throw new Assertion({
    actual: props.actual,
    expects: props.expects,
    operator: props.operator,
    message: message || defaultMessage,
    generated: props.generated,
  });
}
