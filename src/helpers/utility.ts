import { HelperOptions, TemplateDelegate } from 'handlebars';

const JSON6: any = require('json-6');

/**
 * TODO:
 * CSV parse and unparse functions
 * Document all functions
 * Test cases for all functions
 * Installed fast-json-stringify but not implemented it yet
 */

/**
 * A bunch of helpers for working with odd stuff
 */
export default class UtilityHelpers {
  static _json() {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];
      let value = helper.hash.value || null;
      if (helper.fn) {
        const type = helper.hash.type || 'object';
        const block = helper.fn(this) || '';
        switch (type) {
          case ('array'):
            try {
              value = JSON6.parse('[' + block + ']');
            } catch(err) {
              throw new Error(`Failed to parse json: ${err.message}\n[\n${block}\n]\n`);
            }
            break;
          case ('object'):
            try {
              value = JSON6.parse('{' + block + '}');
            } catch(err) {
              throw new Error(`Failed to parse json: ${err.message}\n{\n${block}\n}\n`);
            }
            break;
          case ('number'):
            value = parseInt(block) || -1;
            break;
          case ('boolean'):
            value = Boolean(block) || false;
            break;
          default:
            value = block;
        }
      }
      if (helper.hash.key) {
        return JSON.stringify(helper.hash.key) + ': ' + JSON.stringify(value, null, 4);
      } else {
        return JSON.stringify(value, null, 4);
      }
    } catch(err) {
      console.error('Bristles Error -> Helper: json, Error:', err.message);
      return JSON.stringify({
        parseError: err.message
      }, null, 4);
    }
  }

  static _typeof() {
    try {
      const args = Array.from(arguments);
      args.pop();
      if (Array.isArray(args[0])) {
        return 'array';
      }
      return typeof args[0];
    } catch(err) {
      console.error('Bristles Error -> Helper: getType, Error:', err.message);
      return null;
    }
  }

  static _coalesce() {
    try {
      const args = Array.from(arguments);
      args.pop();
      for (const arg of args) {
        if (arg) {
          return arg;
        }
      }
      return null;
    } catch(err) {
      console.error('Bristles Error -> Helper: coalesce, Error:', err.message);
      return null;
    }
  }

  /*TODO: This isn't currently returning anything and I need to give this some proper thought
  *       and security consideration such as checking that the evaluated function does not
  *       have ANY access to the wider context and I need to work out what to do in case of infinite
  *       loops. Also, if this is going to be used with `map` I need to work out how to stuff
  *       other parameters into the evaluated function so it isn't just the current item being
  *       mapped. May just drop this in its entirety. Though it would be amazing for filtering
  *       and preparing data
  */
  static _eval(code: string): any {
    try {
      const args = Array.from(arguments);
      const helper = args.pop();
      args.shift();

      const evaluator = function (...args: any[]) {
        return Function('"use strict";return (' + code + ')')()(...args);
      }

      const output = evaluator(...args);
    } catch(err) {
      console.error('Bristles Error -> Helper: eval, Error:', err.message);
      return err.message;
    }
  }
}
