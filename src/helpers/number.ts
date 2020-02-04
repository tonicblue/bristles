
import { HelperOptions, TemplateDelegate } from 'handlebars';

/**
 * A bunch of helpers for working with numbers
 */
export default class NumberHelpers {
  static _sum(...args: any[]): number {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];
      return args.reduce(function(a, b){ return a + b; });
    } catch (err) {
      console.error('Bristles Error -> Helper: count, Error:', err.message);
      return 0;
    }
  }
}