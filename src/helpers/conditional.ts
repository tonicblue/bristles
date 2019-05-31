import { HelperOptions, TemplateDelegate } from 'handlebars';
import { isOps, biResponse } from '../utilities';

/**
 * TODO: functions
 *  unless
 *  ifAll
 *  ifAny
 *  ifNone
 *  unlessAll
 *  unlessAny
 *  compare
 *  switch/case/default
 *  elseIfBlock/elseIf
 */

/**
 * A bunch of helpers for working with conditionals
 */
export default class ConditionalHelpers {
  static _if(input: any): any {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];
      const evaluation = isOps(input) ? false : !!input;
      if (!helper.fn) {
        if (evaluation && helper.hash.hasOwnProperty('ifTrue')) {
          console.log('Evaluated to true and has ifTrue which equals', helper.hash.ifTrue);
          return helper.hash.ifTrue;
        } else if (!evaluation && helper.hash.hasOwnProperty('ifFalse')) {
          console.log('Evaluated to false and has ifFalse which equals', helper.hash.ifFalse);
          return helper.hash.ifFalse;
        } else {
          console.log('Evaluated to ', evaluation, 'and does not have appropriate override', helper.hash);
          return evaluation;
        }
      } else {
        if (evaluation) {
          return helper.fn(helper.data);
        } else if (helper.inverse) {
          return helper.inverse(helper.data);
        } else {
          return '';
        }
      }
    } catch(err) {
      console.error('Bristles Error -> Helper: if, Error:', err.message);
      return false;
    }
  }


  static _contains(input: string, test: string): boolean|string {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];
      const contains = typeof input === 'string' && typeof test === 'string' && input.indexOf(test) > -1;
      return biResponse(helper, contains);
    } catch(err) {
      console.error('Bristles Error -> Helper: contains, Error:', err.message);
      return false;
    }
  }
}
