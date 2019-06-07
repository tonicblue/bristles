import { HelperOptions } from 'handlebars';
import { isFunction } from 'util';

import { isOps } from '../utilities';
import { test } from 'shelljs';

/**
 * TODO: functions
 *  sort
 *  slice
 *  splice
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
}
