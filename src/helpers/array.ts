import { HelperOptions } from 'handlebars';
import { isFunction } from 'util';

import * as dot from 'dot-object';

import { isOps } from '../utilities';

/**
 * TODO: functions
 *  join
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

  static _each(input: any, join: string): string {
    const helper: HelperOptions = arguments[arguments.length - 1];
    try {
      if (isOps(input)){
        throw new Error('Invalid arguments');
      }

      if (!helper.fn) {
        throw new Error('The each helper can only be used as a block helper');
      }

      let outputs: string[] = [];
      input = typeof input !== 'object' ? [input] : input;

      if (Array.isArray(input)) {
        const total = '' + input.length;
        for (const index in input) {
          if (index === '0') {
            helper.data['@first'] = true;
          }
          if (index === total) {
            helper.data['@last'] = true;
          }

          helper.data['@index'] = index;
          const output = helper.fn(input[index]).trim();
          outputs.push(output);

          delete helper.data['@first'];
          delete helper.data['@last'];
          delete helper.data['@index'];
        }
      } else {
        const keys = Object.keys(input);
        const total = '' + keys.length;
        for (const index in keys) {
          if (index === '0') {
            helper.data['@first'] = true;
          }
          if (index === total) {
            helper.data['@last'] = true;
          }

          helper.data['@key'] = keys[index];
          const output = helper.fn(input[keys[index]]).trim();
          outputs.push(output);

          delete helper.data['@first'];
          delete helper.data['@last'];
          delete helper.data['@key'];
        }
      }

      outputs = outputs.filter(item => !!item);
      if (outputs.length > 0) {
        return outputs.join(typeof join === 'string' ? join : '\n');
      }
    } catch(err) {
      console.error('Bristles Error -> Helper: each, Error:', err.message);
    }

    try {
      if (helper.inverse) {
        return helper.inverse(helper.data);
      }
    } catch(err) {
      console.error('Bristles Error -> Helper: each, Inverse Error:', err);
    }

    return '';
  }

  static _sort(input: any[], direction?: string, path?: string): any[] {
    const helper: HelperOptions = arguments[arguments.length - 1];
    try {
      if (!Array.isArray(input)) {
        throw new Error('Invalid arguments');
      }

      direction = direction || 'asc';
      direction = direction === 'desc' ? 'desc' : 'asc';
      path = typeof path === 'string' ? path : undefined;

      let func = (a: number, b: number) => { return b - a; };
      if (!path) {
        if (direction === 'desc') {
          func = (a: number, b: number) => { return a - b; };
        }
      } else {
        if (direction === 'desc') {
          func = (a: number, b: number) => {
            return dot.pick(path || '', a) - dot.pick(path || '', b);
          };
        } else {
          func = (a: number, b: number) => {
            return dot.pick(path || '', b) - dot.pick(path || '', a);
          };
        }
      }

      if (helper.hash.mutate === true) {
        return input.sort(func);
      } else {
        const clone = JSON.parse(JSON.stringify(input));
        clone.sort(func);
        return clone;
      }
    } catch(err) {
      console.error('Bristles Error -> Helper: sort, Error:', err.message);
      return Array.isArray ? input : [];
    }
  }

  static _slice(input: any[], begin?: number, end?: number): any[] {
    try {
      if (!Array.isArray(input)) {
        throw new Error('Invalid arguments');
      }

      begin = typeof begin === 'number' ? begin : 0;
      end = typeof end === 'number' ? end : undefined;

      return input.slice(begin, end);
    } catch(err) {
      console.error('Bristles Error -> Helper: slice, Error:', err.message);
      return [];
    }
  }

  static _splice(input: any[], start?: number, deleteCount?: number, items?: any[]): any[] {
    const helper: HelperOptions = arguments[arguments.length - 1];
    try {
      if (!Array.isArray(input)) {
        throw new Error('Invalid arguments');
      }

      start = typeof start === 'number' ? start : 0;
      deleteCount = typeof deleteCount === 'number' ? deleteCount : 0;
      items = Array.isArray(items) ? items : [];

      if (helper.hash.mutate === true) {
        return input.splice(start, deleteCount, ...items);
      } else {
        const clone = JSON.parse(JSON.stringify(input));
        clone.splice(start, deleteCount, ...items);
        return clone;
      }
    } catch(err) {
      console.error('Bristles Error -> Helper: splice, Error:', err.message);
      return [];
    }
  }
}
