"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var S = require("string");
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
var StringHelpers = /** @class */ (function () {
    function StringHelpers() {
    }
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
    StringHelpers._split = function (input, delimeter) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return [];
            }
            if (typeof delimeter !== 'string') {
                delimeter = ',';
            }
            return input.split(delimeter);
        }
        catch (err) {
            console.error('Bristles Error -> Helper: split, Error:', err.message);
            return [];
        }
    };
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
    StringHelpers._substr = function (input, from, length) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            if (typeof from !== 'number') {
                from = 0;
            }
            if (typeof length !== 'number') {
                length = undefined;
            }
            return input.substr(from, length);
        }
        catch (err) {
            console.error('Bristles Error -> Helper: substr, Error:', err.message);
            return '';
        }
    };
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
    StringHelpers._substring = function (input, start, end) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            if (typeof start !== 'number') {
                start = 0;
            }
            if (typeof end !== 'number') {
                end = undefined;
            }
            return input.substr(start, end);
        }
        catch (err) {
            console.error('Bristles Error -> Helper: substring, Error:', err.message);
            return '';
        }
    };
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
    StringHelpers._concat = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            var helper = arguments[arguments.length - 1];
            var output = '';
            for (var i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] !== 'object') {
                    output += arguments[i].toString();
                }
            }
            return output;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: concat, Error:', err.message);
            return '';
        }
    };
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
    StringHelpers._indexOf = function (input, match) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string' || !match || typeof match === 'object') {
                return -1;
            }
            return input.indexOf(match.toString());
        }
        catch (err) {
            console.error('Bristles Error -> Helper: indexOf, Error:', err.message);
            return -1;
        }
    };
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
    StringHelpers._lastIndexOf = function (input, match) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string' || !match || typeof match === 'object') {
                return -1;
            }
            return input.lastIndexOf(match.toString());
        }
        catch (err) {
            console.error('Bristles Error -> Helper: indexOf, Error:', err.message);
            return -1;
        }
    };
    StringHelpers._toUpperCase = function (input) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            return input.toUpperCase();
        }
        catch (err) {
            console.error('Bristles Error -> Helper: toUpperCase, Error:', err.message);
            return '';
        }
    };
    StringHelpers._toLowerCase = function (input) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            return input.toLowerCase();
        }
        catch (err) {
            console.error('Bristles Error -> Helper: toLowerCase, Error:', err.message);
            return '';
        }
    };
    StringHelpers._padStart = function (input, maxLength, fillString) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            if (typeof maxLength !== 'number') {
                return input;
            }
            if (!fillString || typeof fillString === 'object') {
                fillString = ' ';
            }
            return input.padStart(maxLength, fillString.toString());
        }
        catch (err) {
            console.error('Bristles Error -> Helper: padStart, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._padEnd = function (input, maxLength, fillString) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            if (typeof maxLength !== 'number') {
                return input;
            }
            if (!fillString || typeof fillString === 'object') {
                fillString = ' ';
            }
            return input.padEnd(maxLength, fillString.toString());
        }
        catch (err) {
            console.error('Bristles Error -> Helper: padEnd, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._repeat = function (input, times) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string' || typeof times !== 'number') {
                return '';
            }
            return input.repeat(times);
        }
        catch (err) {
            console.error('Bristles Error -> Helper: repeat, Error:', err.message);
            return '';
        }
    };
    StringHelpers._camelize = function (input) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            return S(input).camelize().s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: camelize, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._capitalize = function (input) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            return S(input).capitalize().s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: capitalize, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._chompLeft = function (input, prefix) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            prefix = typeof prefix === 'string' ? prefix : input.substring(0, 1) || ' ';
            return S(input).chompLeft(prefix).s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: chompLeft, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._chompRight = function (input, suffix) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            suffix = typeof suffix === 'string' ? suffix : input.substring(0, 1) || ' ';
            return S(input).chompRight(suffix).s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: chompRight, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._collapseWhitespace = function (input) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            return S(input).collapseWhitespace().s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: collapseWhitespace, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._countOccurances = function (input, substring) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string' || typeof substring !== 'string') {
                return 0;
            }
            return S(input).count(substring);
        }
        catch (err) {
            console.error('Bristles Error -> Helper: countOccurances, Error:', err.message);
            return 0;
        }
    };
    StringHelpers._dasherize = function (input) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            return S(input).dasherize().s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: dasherize, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._decodeHTMLEntities = function (input) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            return S(input).decodeHTMLEntities().s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: decodeHTMLEntities, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._ensureLeft = function (input, prefix) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            if (typeof prefix !== 'string') {
                return input;
            }
            return S(input).ensureLeft(prefix).s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: ensureLeft, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._ensureRight = function (input, suffix) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            if (typeof suffix !== 'string') {
                return input;
            }
            return S(input).ensureRight(suffix).s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: ensureRight, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._humanize = function (input) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            return S(input).humanize().s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: humanize, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._lines = function (input) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return [];
            }
            return S(input).lines();
        }
        catch (err) {
            console.error('Bristles Error -> Helper: lines, Error:', err.message);
            return typeof input === 'string' ? [input] : [];
        }
    };
    StringHelpers._replace = function (input, match, replacement) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            if (typeof match !== 'string' || typeof replacement !== 'string') {
                return input;
            }
            return input.split(match).join(replacement);
        }
        catch (err) {
            console.error('Bristles Error -> Helper: replace, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._regexReplace = function (input, match, options, replacement) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            if (typeof match !== 'string' || typeof options !== 'string' || typeof replacement !== 'string') {
                return input;
            }
            var regex = new RegExp(match, options);
            return input.replace(regex, replacement);
        }
        catch (err) {
            console.error('Bristles Error -> Helper: replace, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._slugify = function (input) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            return S(input.replace(/\//g, '-')).slugify().s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: slugify, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._trim = function (input) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            return S(input).trim().s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: trim, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._trimLeft = function (input) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            return S(input).trimLeft().s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: trimLeft, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._trimRight = function (input) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            return S(input).trimRight().s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: trimRight, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._stripLeft = function (input, chars) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            chars = typeof chars === 'string' ? chars : '\s';
            return S(input).stripLeft(chars).s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: stripLeft, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._stripRight = function (input, chars) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            chars = typeof chars === 'string' ? chars : '\s';
            return S(input).stripRight(chars).s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: stripRight, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._stripTags = function (input) {
        var _a;
        try {
            var tags = Array.from(arguments);
            tags.pop();
            tags.shift();
            if (typeof input !== 'string') {
                return '';
            }
            return (_a = S(input)).stripTags.apply(_a, tags).s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: stripTags, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._titleCase = function (input) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            return S(input).titleCase().s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: titleCase, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._toBoolean = function (input) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return false;
            }
            return S(input).toBoolean();
        }
        catch (err) {
            console.error('Bristles Error -> Helper: toBoolean, Error:', err.message);
            return false;
        }
    };
    StringHelpers._truncate = function (input, length, chars) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            if (typeof length !== 'number') {
                return input;
            }
            chars = typeof chars === 'string' ? chars : '...';
            return S(input).truncate(length, chars).s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: truncate, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._underscore = function (input) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string') {
                return '';
            }
            return S(input).underscore().s;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: underscore, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    StringHelpers._match = function (input, pattern, options) {
        try {
            var helper = arguments[arguments.length - 1];
            if (typeof input !== 'string' || typeof pattern !== 'string') {
                return '';
            }
            options = typeof options === 'string' ? options : 'gi';
            var regex = new RegExp(pattern, options);
            var matches = [];
            var match = null;
            while ((match = regex.exec(input)) !== null) {
                matches.push(match);
            }
            if (helper.fn) {
                if (matches.length === 0 && helper.inverse) {
                    return helper.inverse(this);
                }
                else if (matches.length > 0) {
                    var output = [];
                    for (var index = 0; index < matches.length; index++) {
                        var context = {
                            match: matches[index],
                            first: index === 0,
                            last: index === matches.length - 1,
                            index: index
                        };
                        output.push(helper.fn(context));
                    }
                    return output.join('');
                }
            }
            return matches;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: match, Error:', err.message);
            return typeof input === 'string' ? input : '';
        }
    };
    return StringHelpers;
}());
exports.default = StringHelpers;
//# sourceMappingURL=string.js.map