import { HelperOptions } from 'handlebars';
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
    static _json(): any;
    static _typeof(): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array" | undefined;
    static _coalesce(): any;
    static _raw(options: HelperOptions): string;
    static _lookupMap(): any;
    static _partial(partial: (context: any) => string): string;
    static _toHtmlAttributes(input: any): string;
    static _eval(code: string): any;
}
