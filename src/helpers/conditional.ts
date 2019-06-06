import { HelperOptions, TemplateDelegate } from 'handlebars';
import * as DeepDiff from 'deep-diff';

import { isOps, Map } from '../utilities';

/**
 * TODO: functions
 *  switch/case/default
 */

/**
 * A bunch of helpers for working with conditionals
 */
export default class ConditionalHelpers {
  static _if(input: any): any {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];
      const evaluation = isOps(input) ? false : !!input;
      return this.conditionalResponse(helper, evaluation);
    } catch (err) {
      console.error('Bristles Error -> Helper: if, Error:', err.message);
      return false;
    }
  }

  static _unless(input: any): any {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];
      const evaluation = isOps(input) ? false : !!input;
      return this.conditionalResponse(helper, !evaluation);
    } catch (err) {
      console.error('Bristles Error -> Helper: unless, Error:', err.message);
      return false;
    }
  }

  static _ifAny(): any {
    try {
      const args = Array.from(arguments);
      const helper: HelperOptions = args.pop();
      let evaluation = false;
      for (const arg of args) {
        if (!!arg) {
          evaluation = true;
          break;
        }
      }
      return this.conditionalResponse(helper, evaluation);
    } catch (err) {
      console.error('Bristles Error -> Helper: ifAny, Error:', err.message);
      return false;
    }
  }

  static _unlessAll(): any {
    try {
      const args = Array.from(arguments);
      const helper: HelperOptions = args.pop();
      let evaluation = false;
      for (const arg of args) {
        if (!arg) {
          evaluation = true;
          break;
        }
      }
      return this.conditionalResponse(helper, evaluation);
    } catch (err) {
      console.error('Bristles Error -> Helper: unlessAll, Error:', err.message);
      return false;
    }
  }

  static _ifAll(): any {
    try {
      const args = Array.from(arguments);
      const helper: HelperOptions = args.pop();
      const trueArgs = args.filter(arg => { return !!arg; });
      const evaluation = trueArgs.length === args.length;
      return this.conditionalResponse(helper, evaluation);
    } catch (err) {
      console.error('Bristles Error -> Helper: ifAll, Error:', err.message);
      return false;
    }
  }

  static _ifNone(): any {
    try {
      const args = Array.from(arguments);
      const helper: HelperOptions = args.pop();
      const falseArgs = args.filter(arg => { return !arg; });
      const evaluation = falseArgs.length === args.length;
      return this.conditionalResponse(helper, evaluation);
    } catch (err) {
      console.error('Bristles Error -> Helper: ifNone, Error:', err.message);
      return false;
    }
  }

  static _has(target: any, property: string): any {
    try {
      if (typeof target !== 'object' || Array.isArray(target) || typeof property !== 'string') {
        throw new Error('Invalid arguments');
      }
      const helper: HelperOptions = arguments[arguments.length - 1];
      const evaluation = target.hasOwnProperty(property);
      return this.conditionalResponse(helper, evaluation);
    } catch (err) {
      console.error('Bristles Error -> Helper: has, Error:', err.message);
      return false;
    }
  }

  //TODO: Allow an array of properties in arguments and flatten it.
  //      This would be useful with getKeys comparing object types
  static _hasAll(): any {
    try {
      const args = Array.from(arguments);
      const helper: HelperOptions = args.pop();
      const target = args.shift();
      const missing = args.filter(arg => { return !target.hasOwnProperty(arg); });
      const evaluation = missing.length === 0;
      return this.conditionalResponse(helper, evaluation, { missing });
    } catch (err) {
      console.error('Bristles Error -> Helper: ifAll, Error:', err.message);
      return false;
    }
  }

  //TODO: Allow an array of properties in arguments and flatten it.
  //      This would be useful with getKeys comparing object types
  static _hasAny(): any {
    try {
      const args = Array.from(arguments);
      const helper: HelperOptions = args.pop();
      const target = args.shift();
      const has = args.filter(arg => { return target.hasOwnProperty(arg); });
      const evaluation = has.length > 0;
      return this.conditionalResponse(helper, evaluation, { has });
    } catch (err) {
      console.error('Bristles Error -> Helper: ifAll, Error:', err.message);
      return false;
    }
  }

  static _is(input: any, type: string): any {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];
      if (typeof type !== 'string') {
        throw new Error('Invalid arguments');
      }
      const evaluation = typeof input === type;
      return this.conditionalResponse(helper, evaluation);
    } catch (err) {
      console.error('Bristles Error -> Helper: gt, Error:', err.message);
      return false;
    }
  }

  static _isLike(input: any, test: any): any {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];
      if (!test || isOps(test)) {
        throw new Error('Invalid arguments');
      }
      const inputType = typeof input;
      const testType = typeof test;
      const evaluation = inputType === testType;
      return this.conditionalResponse(helper, evaluation, { inputType, testType });
    } catch (err) {
      console.error('Bristles Error -> Helper: gt, Error:', err.message);
      return false;
    }
  }

  static _gt(inputA: number, inputB: number): any {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];
      if (typeof inputA !== 'number' || typeof inputB !== 'number') {
        throw new Error('Invalid arguments');
      }
      const evaluation = inputA > inputB;
      return this.conditionalResponse(helper, evaluation);
    } catch (err) {
      console.error('Bristles Error -> Helper: gt, Error:', err.message);
      return false;
    }
  }

  static _gte(inputA: number, inputB: number): any {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];
      if (typeof inputA !== 'number' || typeof inputB !== 'number') {
        throw new Error('Invalid arguments');
      }
      const evaluation = inputA >= inputB;
      return this.conditionalResponse(helper, evaluation);
    } catch (err) {
      console.error('Bristles Error -> Helper: gt, Error:', err.message);
      return false;
    }
  }

  static _lt(inputA: number, inputB: number): any {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];
      if (typeof inputA !== 'number' || typeof inputB !== 'number') {
        throw new Error('Invalid arguments');
      }
      const evaluation = inputA < inputB;
      return this.conditionalResponse(helper, evaluation);
    } catch (err) {
      console.error('Bristles Error -> Helper: lt, Error:', err.message);
      return false;
    }
  }

  static _lte(inputA: number, inputB: number): any {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];
      if (typeof inputA !== 'number' || typeof inputB !== 'number') {
        throw new Error('Invalid arguments');
      }
      const evaluation = inputA <= inputB;
      return this.conditionalResponse(helper, evaluation);
    } catch (err) {
      console.error('Bristles Error -> Helper: lte, Error:', err.message);
      return false;
    }
  }

  static _eq(inputA: any, inputB: any): any {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];
      if (isOps(inputA) || !inputB || isOps(inputB)) {
        throw new Error('Invalid arguments');
      }
      if (typeof inputA === 'object' && typeof inputB === 'object') {
        const changes = DeepDiff.diff(inputA, inputB);
        return this.conditionalResponse(helper, !changes, { changes });
      } else {
        const evaluation = inputA == inputB;
        return this.conditionalResponse(helper, evaluation);
      }
    } catch (err) {
      console.error('Bristles Error -> Helper: eq, Error:', err.message);
      return false;
    }
  }

  static _teq(inputA: any, inputB: any): any {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];
      if (isOps(inputA) || !inputB || isOps(inputB)) {
        throw new Error('Invalid arguments');
      }
      if (typeof inputA === 'object' && typeof inputB === 'object') {
        const changes = DeepDiff.diff(inputA, inputB);
        return this.conditionalResponse(helper, !changes, { changes });
      } else {
        const evaluation = inputA === inputB;
        return this.conditionalResponse(helper, evaluation);
      }
    } catch (err) {
      console.error('Bristles Error -> Helper: teq, Error:', err.message);
      return false;
    }
  }

  static _any(input: any[]): any {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];
      if (isOps(input) || !Array.isArray(input)) {
        throw new Error('Invalid arguments');
      }
      const length = input.length;
      return this.conditionalResponse(helper, length > 0, { length });
    } catch (err) {
      console.error('Bristles Error -> Helper: any, Error:', err.message);
      return false;
    }
  }

  static _contains(input: string, test: string): any {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];
      if (isOps(input) || !test || isOps(test)) {
        throw new Error('Invalid arguments');
      }
      const index = input.toString().indexOf(test.toString());
      return this.conditionalResponse(helper, index > -1, { index });
    } catch (err) {
      console.error('Bristles Error -> Helper: contains, Error:', err.message);
      return false;
    }
  }

  static _includes(input: any[], test: any): any {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];
      if (!Array.isArray(input) || isOps(test)) {
        throw new Error('Invalid arguments');
      }
      if (typeof test === 'object') {
        for (const [index, item] of Object.entries(input)) {
          if (!DeepDiff.diff(item, test)) {
            return this.conditionalResponse(helper, true, { index });
          }
        }
        return this.conditionalResponse(helper, false, { index: -1 });
      } else {
        const index = input.indexOf(test);
        return this.conditionalResponse(helper, index > -1, { index });
      }
    } catch (err) {
      console.error('Bristles Error -> Helper: includes, Error:', err.message);
      return false;
    }
  }

  static _elseIfWrapper() {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];

      if (!helper.fn) {
        throw new Error('The elseIfWrapper helper can only be used as a block helper');
      }

      helper.data['@elseIf'] = helper.data['@elseIf'] || [];
      helper.data['@elseIf'].push(false);

      let output = helper.fn(helper.data);
      const level = helper.data['@elseIf'].length - 1;

      if (helper.data['@elseIf'][level] === false) {
        if (helper.inverse) {
          output = helper.inverse(helper.data);
        } else {
          output = '';
        }
      }

      helper.data['@elseIf'].pop();
      if (helper.data['@elseIf'].length === 0) {
        delete helper.data['@elseIf'];
      }
      return output;
    } catch(err) {
      console.error('Bristles Error -> Helper: elseIfWrapper, Error:', err.message);
      return '';
    }
  }

  static _elseIf(input: any) {
    try {
      const helper: HelperOptions = arguments[arguments.length - 1];

      const level = helper.data['@elseIf'].length - 1;
      if (helper.data['@elseIf'][level] === true) {
        return '';
      }

      if (!helper.fn) {
        throw new Error('The elseIf helper can only be used as a block helper');
      }

      if (helper.inverse) {
        throw new Error('The elseIf helper should not contain an inverse/else block')
      }

      const evaluation = isOps(input) ? false : !!input;
      if (evaluation) {
        helper.data['@elseIf'][level] = true;
        return helper.fn(helper.data);
      } else {
        return '';
      }
    } catch(err) {
      console.error('Bristles Error -> Helper: elseIf, Error:', err.message);
      return '';
    }
  }

  static conditionalResponse(helper: HelperOptions, evaluation: boolean, metadata: Map<any> = {}): any {
    if (!helper.fn) {
      if (evaluation && helper.hash.hasOwnProperty('ifTrue')) {
        return helper.hash.ifTrue;
      } else if (!evaluation && helper.hash.hasOwnProperty('ifFalse')) {
        return helper.hash.ifFalse;
      } else {
        return evaluation;
      }
    } else {
      let output = '';

      for (const [key, value] of Object.entries(metadata)) {
        helper.data['@' + key] = value;
      }

      if (evaluation) {
        output = helper.fn(helper.data);
      } else if (helper.inverse) {
        output = helper.inverse(helper.data);
      }

      for (const key of Object.keys(metadata)) {
        delete helper.data['@' + key];
      }

      return output;
    }
  }
}