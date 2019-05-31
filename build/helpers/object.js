"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dot = require("dot-object");
var utilities_1 = require("../utilities");
var JSON6 = require('json-6');
/**
 * TODO: Functions
 *  dotPattern
 *  deep-diff
 * TODO: Other
 *  Document all functions
 *  Test cases for all functions
 */
/**
 * A bunch of helpers for working with objects
 */
var ObjectHelpers = /** @class */ (function () {
    function ObjectHelpers() {
    }
    ObjectHelpers._values = function (input) {
        try {
            if (typeof input !== 'object' || utilities_1.isOps(input)) {
                throw new Error('Invalid arguments');
            }
            return Object.values(input);
        }
        catch (err) {
            console.error('Bristles Error -> Helper: values, Error:', err.message);
            return null;
        }
    };
    ObjectHelpers._keys = function (input) {
        try {
            if (typeof input !== 'object' || utilities_1.isOps(input)) {
                throw new Error('Invalid arguments');
            }
            return Object.keys(input);
        }
        catch (err) {
            console.error('Bristles Error -> Helper: keys, Error:', err.message);
            return null;
        }
    };
    ObjectHelpers._entries = function (input) {
        try {
            if (typeof input !== 'object' || utilities_1.isOps(input)) {
                throw new Error('Invalid arguments');
            }
            return Object.entries(input);
        }
        catch (err) {
            console.error('Bristles Error -> Helper: entries, Error:', err.message);
            return null;
        }
    };
    ObjectHelpers._get = function (context, path) {
        try {
            if (typeof path !== 'string') {
                throw new Error('Invalid arguments');
            }
            return dot.pick(path, context) || null;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: get, Error:', err.message);
            return null;
        }
    };
    ObjectHelpers._merge = function () {
        try {
            var args = Array.from(arguments);
            var helper = args.pop();
            if (args.length < 2) {
                throw new Error('Invalid arguments');
            }
            return {}; //deepmerge(...args);
        }
        catch (err) {
            console.error('Bristles Error -> Helper: entries, Error:', err.message);
            return null;
        }
    };
    //TODO: Merge options
    ObjectHelpers._parse = function (value) {
        try {
            var helper = arguments[arguments.length - 1];
            if (!value || utilities_1.isOps(value)) {
                value = helper.fn ? helper.fn(helper.data) : null;
            }
            switch (helper.hash.type || null) {
                case ('json'):
                    value = JSON6.parse(value);
                    break;
                case ('number'):
                    value = parseInt(value);
                    break;
                case ('boolean'):
                    value = Boolean(value);
                    break;
            }
            if (helper.hash.context) {
                var path = helper.hash.path || '@parsed';
                dot.set(path, value, helper.hash.context);
            }
            else {
                return value;
            }
        }
        catch (err) {
            console.error('Bristles Error -> Helper: parse, Error:', err.message);
        }
    };
    return ObjectHelpers;
}());
exports.default = ObjectHelpers;
//# sourceMappingURL=object.js.map