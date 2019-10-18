import * as Querystring from 'querystring';
import { HelperOptions, TemplateDelegate } from 'handlebars';
import * as dot from 'dot-object';
import { isOps } from '../utilities';
import * as deepmerge from 'deepmerge';

const JSON6: any = require('json-6');

/**
 * TODO: Functions
 *  dotPattern
 *  deep-diff
 * TODO: Other
 *  Document all functions
 *  Test cases for all functions
 */

/**
 * A bunch of helpers for working with objects
 */
export default class ObjectHelpers {
  static _values(input: any): any {
    try {
      if (typeof input !== 'object' || isOps(input)) {
        throw new Error('Invalid arguments');
      }
      return Object.values(input);
    } catch(err) {
      console.error('Bristles Error -> Helper: values, Error:', err.message);
      return null;
    }
  }

  static _keys(input: any): any {
    try {
      if (typeof input !== 'object' || isOps(input)) {
        throw new Error('Invalid arguments');
      }
      return Object.keys(input);
    } catch(err) {
      console.error('Bristles Error -> Helper: keys, Error:', err.message);
      return null;
    }
  }

  static _entries(input: any): any {
    try {
      if (typeof input !== 'object' || isOps(input)) {
        throw new Error('Invalid arguments');
      }
      return Object.entries(input);
    } catch(err) {
      console.error('Bristles Error -> Helper: entries, Error:', err.message);
      return null;
    }
  }

  static _get(context: any, path: string): any {
    try {
      if (typeof path !== 'string') {
        throw new Error('Invalid arguments');
      }
      return dot.pick(path, context);
    } catch(err) {
      console.error('Bristles Error -> Helper: get, Error:', err.message);
      return null;
    }
  }

  static _merge(): any {
    try {
      const args = Array.from(arguments);
      const helper = args.pop();
      if (args.length < 2) {
        throw new Error('Invalid arguments');
      }
      return {}; //deepmerge(...args);
    } catch(err) {
      console.error('Bristles Error -> Helper: entries, Error:', err.message);
      return null;
    }
  }

  //TODO: Merge options
  static _parse(value: any): any {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];

      if (!value || isOps(value)) {
        value = helper.fn ? helper.fn(helper.data) : null;
      }

      switch (helper.hash.type || null) {
        case ('json'):
          value = JSON6.parse(value);
          break;
        case ('number'):
          value = parseInt(value);
          break;
        case ('boolean'):
          value = Boolean(value);
          break;
        case ('querystring'):
          value = Querystring.parse(value);
          break;
      }

      if (helper.hash.context) {
        const path = helper.hash.path || '@parsed';
        dot.set(path, value, helper.hash.context);
      } else {
        return value;
      }
    } catch(err) {
      console.error('Bristles Error -> Helper: parse, Error:', err.message);
    }
  }
}