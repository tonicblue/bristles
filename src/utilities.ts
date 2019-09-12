import { HelperOptions } from 'handlebars';

/**
 * A bunch of helper helpers
 */
export function isOps(obj: any) {
  return !!obj &&
    obj.hasOwnProperty('hash') &&
    obj.hasOwnProperty('data') &&
    obj.hasOwnProperty('name');
}

export interface Map<T> {
  [key: string]: T;
}