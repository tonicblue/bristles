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

export function isValidDate(obj: any) {
  return obj && Object.prototype.toString.call(obj) === "[object Date]" && !isNaN(obj);
}

export interface Map<T> {
  [key: string]: T;
}