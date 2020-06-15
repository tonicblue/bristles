import * as MathJS from 'mathjs';
import { HelperOptions, TemplateDelegate } from 'handlebars';
import { isOps } from 'src/utilities';

/**
 * A bunch of helpers for working with numbers
 */
export default class NumberHelpers {
  static _sum(...args: any[]): number {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];
      args.pop();
      return args.reduce(function(a, b){ return a + b; });
    } catch (err) {
      console.error('Bristles Error -> Helper: sum, Error:', err.message);
      return 0;
    }
  }

  static maths(expression: string, data: any) {
    try {
      if (typeof expression !== 'string') {
        throw new Error('Invalid arguments, the first argument must be a string');
      }

      const args = Array.from(arguments);
      const helper: HelperOptions = args.pop();

      if (isOps(data)) {
        data = this;
      }

      data = Object.assign(data, helper.hash)

      const output = MathJS.evaluate(expression, data);

      return output;
    } catch (err) {
      console.error('Bristles Error -> Helper: maths, Error:', err.message);
      return 0;
    }
  }
}