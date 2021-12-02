export function stringify(value: unknown): string {
  if (typeof value === 'object') return JSON.stringify(value);
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return value.toString();
  return value as string;
}