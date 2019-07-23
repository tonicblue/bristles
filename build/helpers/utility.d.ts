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
    static _json(): string;
    static _typeof(): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array" | null;
    static _coalesce(): any;
    static _eval(code: string): any;
}
