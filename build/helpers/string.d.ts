/**
 * TODO: Functions
 *  regexReplace
 *  inflect
 *  toBase64
 *  fromBase64
 *  hash
 * TODO: Other
 *  Document all functions
 *  Test cases for all functions
 */
/**
 * A bunch of helpers for working with strings
 */
export default class StringHelpers {
    /**
     * Split up a string by a given delimeter
     *
     * @param input       The string to split
     * @param delimeter?  The string by which to split the input string (defaults to ',')
     * @returns           An array of strings. On failure returns an empty array.
     *
     * @type              Inline
     * @example ```
     * {{split "Europe, Asia, North America" ", "}}
     * output => [ "Europe", "Asia", "North America" ]
     * ```
     */
    static _split(input: string, delimeter?: string): string[];
    /**
     * Gets a portion of a string from a starting point to a given length
     *
     * @param input       The string to split
     * @param from        The point in the string to start from. The first character is `0`
     * @param length?     How many characters to return. If left empty the rest of the string after the start point will be returned
     * @returns           A subportion of the input string. On failure returns an empty string.
     *
     * @type              Inline
     * @example ```
     * {{substr "Hello, my name is E. Honda. How are you?" 18 8}}
     * output => "E. Honda"
     * ```
     */
    static _substr(input: string, from: number, length?: number): string;
    /**
     * Gets a portion of a string from a starting point to an end point
     *
     * @param input       The string to split
     * @param start       The point in the string to start from. The first character is `0`
     * @param end?        The point in the string to end at. If left empty the rest of the string after the start point will be returned
     * @returns           A subportion of the input string. On failure returns an empty string.
     *
     * @type              Inline
     * @example ```
     * {{substring "Hello, my name is E. Honda. How are you?" 18 26}}
     * output => "E. Honda"
     * ```
     */
    static _substring(input: string, start: number, end?: number): string;
    /**
     * Joins any number of strings or stringable objects together into one long string
     *
     * @param ...inputs   The things to join together. Objects will be ignored
     * @returns           One big string. On failure returns an empty string.
     *
     * @type              Inline
     * @example ```
     * context => { "name": "E. Honda", "yearBorn": 1960, "likesNoodles": true }
     * {{concat "My name is " name " and I was born in " yearBorn ". True or false, I like noodles? " likesNoodles}}
     * output => "My name is E. Honda and I was born in 1960. True or false, I like noodles? true"
     * ```
     */
    static _concat(...args: any[]): string;
    /**
     * Find the position of the first instance of one string in another.
     *
     * @param input       The string to search
     * @param match       The string you are searching for
     * @returns           The position of the first occurance of the match string as a number, or `-1` if it is not found. On failure returns `-1`.
     *
     * @type              Inline
     * @example ```
     * {{indexOf "This string contains multiple letter 'i's" "i"}}
     * output => 2
     * ```
     */
    static _indexOf(input: string, match: string): number;
    /**
     * Find the position of the last instance of one string in another.
     *
     * @param input       The string to search
     * @param match       The string you are searching for
     * @returns           The position of the last occurance of the match string as a number, or `-1` if it is not found. On failure returns `-1`.
     *
     * @type              Inline
     * @example ```
     * {{indexOf "This string contains multiple letter 'i's" "i"}}
     * output => 38
     * ```
     */
    static _lastIndexOf(input: string, match: string): number;
    static _toUpperCase(input: string): string;
    static _toLowerCase(input: string): string;
    static _padStart(input: string, maxLength: number, fillString: string): string;
    static _padEnd(input: string, maxLength: number, fillString: string): string;
    static _repeat(input: string, times: number): string;
    static _camelize(input: string): string;
    static _capitalize(input: string): string;
    static _chompLeft(input: string, prefix: string): string;
    static _chompRight(input: string, suffix: string): string;
    static _collapseWhitespace(input: string): string;
    static _countOccurances(input: string, substring: string): number;
    static _dasherize(input: string): string;
    static _decodeHTMLEntities(input: string): string;
    static _ensureLeft(input: string, prefix: string): string;
    static _ensureRight(input: string, suffix: string): string;
    static _humanize(input: string): string;
    static _lines(input: string): string[];
    static _replace(input: string, match: string, replacement: string): string;
    static _regexReplace(input: string, match: string, options: string, replacement: string): string;
    static _slugify(input: string): string;
    static _trim(input: string): string;
    static _trimLeft(input: string): string;
    static _trimRight(input: string): string;
    static _stripLeft(input: string, chars: string): string;
    static _stripRight(input: string, chars: string): string;
    static _stripTags(input: string): string;
    static _titleCase(input: string): string;
    static _toBoolean(input: string): boolean;
    static _truncate(input: string, length: number, chars: string): string;
    static _underscore(input: string): string;
    static _unindent(): string;
    static _match(input: string, pattern: string, options: string): string | RegExpExecArray[];
}
