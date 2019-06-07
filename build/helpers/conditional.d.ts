import { HelperOptions } from 'handlebars';
import { Map } from '../utilities';
/**
 * TODO:
 *  document
 *  test
 */
/**
 * A bunch of helpers for working with conditionals
 */
export default class ConditionalHelpers {
    static _if(input: any): any;
    static _unless(input: any): any;
    static _ifAny(): any;
    static _unlessAll(): any;
    static _ifAll(): any;
    static _ifNone(): any;
    static _has(target: any, property: string): any;
    static _hasAll(): any;
    static _hasAny(): any;
    static _isString(input: any): any;
    static _isNumber(input: any): any;
    static _isNaN(input: any): any;
    static _isFinite(input: any): any;
    static _isBoolean(input: any): any;
    static _isObject(input: any): any;
    static _isArray(input: any): any;
    static _isFunction(input: any): any;
    static _isNull(input: any): any;
    static _isUndefined(input: any): any;
    static _isLike(input: any, test: any): any;
    static _gt(inputA: number, inputB: number): any;
    static _gte(inputA: number, inputB: number): any;
    static _lt(inputA: number, inputB: number): any;
    static _lte(inputA: number, inputB: number): any;
    static _eq(inputA: any, inputB: any): any;
    static _teq(inputA: any, inputB: any): any;
    static _any(input: any[]): any;
    static _contains(input: string, test: string): any;
    static _startsWith(input: string, test: string): any;
    static _endsWith(input: string, test: string): any;
    static _includes(input: any[], test: any): any;
    /**
     * Check to see if a string matches a regular expression
     *
     * @param input       The string to test
     * @param expression  The regular expression to test the input string with
     * @param options     Any regular expression options to use (defaults to 'gi')
     * @returns           A `false` if there is no match or regular expression match array where the first
     *                    item is the complete match and each subsequent iteam are the captured groups.
     *                    On failure returns `false`
     *
     * @type              Block/Inline
     */
    static _regexMatch(input: string, expression: string, options?: string): false | string[] | string;
    static _elseIfWrapper(): string;
    static _elseIf(input: any): string;
    static _switch(input: any): string;
    static _case(input: any): string;
    static conditionalResponse(helper: HelperOptions, evaluation: boolean, metadata?: Map<any>): any;
}
