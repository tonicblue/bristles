import { HelperOptions, TemplateDelegate } from 'handlebars';
import { isFunction } from 'util';

/**
 * TODO: functions
 *  map
 *  sort
 *  slice
 *  splice
 *  join
 *  eachJoin
 *  merge
 *  delta
 *  same
 *  pop
 *  push
 *  shift
 *  unshift
 *  filter
 *  find
 */

/**
 * A bunch of helpers for working with arrays
 */
export default class ArrayHelpers {
  static _map(input: any[], func: (...args: any[]) => any): any[] {
    try {
      if (!Array.isArray(input) || !isFunction(func)) {
        throw new Error('Invalid arguments');
      }
      return input.map(func);
    } catch(err) {
      console.error('Bristles Error -> Helper: map, Error:', err.message);
      return [];
    }
  }
}
