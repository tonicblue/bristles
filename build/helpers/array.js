"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
var utilities_1 = require("../utilities");
/**
 * TODO: functions
 *  map
 *  sort
 *  slice
 *  splice
 *  join
 *  eachJoin
 *  merge
 *  delta
 *  same
 *  pop
 *  push
 *  shift
 *  unshift
 *  filter
 *  find
 */
/**
 * A bunch of helpers for working with arrays
 */
var ArrayHelpers = /** @class */ (function () {
    function ArrayHelpers() {
    }
    ArrayHelpers._map = function (input, func) {
        try {
            if (!Array.isArray(input) || !util_1.isFunction(func)) {
                throw new Error('Invalid arguments');
            }
            return input.map(func);
        }
        catch (err) {
            console.error('Bristles Error -> Helper: map, Error:', err.message);
            return [];
        }
    };
    ArrayHelpers._each = function (input, join) {
        var helper = arguments[arguments.length - 1];
        try {
            if (utilities_1.isOps(input)) {
                throw new Error('Invalid arguments');
            }
            if (!helper.fn) {
                throw new Error('The each helper can only be used as a block helper');
            }
            var outputs = [];
            input = typeof input !== 'object' ? [input] : input;
            if (Array.isArray(input)) {
                var total = '' + input.length;
                for (var index in input) {
                    if (index === '0') {
                        helper.data['@first'] = true;
                    }
                    if (index === total) {
                        helper.data['@last'] = true;
                    }
                    helper.data['@index'] = index;
                    var output = helper.fn(input[index]).trim();
                    outputs.push(output);
                    delete helper.data['@first'];
                    delete helper.data['@last'];
                    delete helper.data['@index'];
                }
            }
            else {
                var keys = Object.keys(input);
                var total = '' + keys.length;
                for (var index in keys) {
                    if (index === '0') {
                        helper.data['@first'] = true;
                    }
                    if (index === total) {
                        helper.data['@last'] = true;
                    }
                    helper.data['@key'] = keys[index];
                    var output = helper.fn(input[keys[index]]).trim();
                    outputs.push(output);
                    delete helper.data['@first'];
                    delete helper.data['@last'];
                    delete helper.data['@key'];
                }
            }
            outputs = outputs.filter(function (item) { return !!item; });
            if (outputs.length > 0) {
                return outputs.join(typeof join === 'string' ? join : '\n');
            }
        }
        catch (err) {
            console.error('Bristles Error -> Helper: each, Error:', err.message);
        }
        try {
            if (helper.inverse) {
                return helper.inverse(helper.data);
            }
        }
        catch (err) {
            console.error('Bristles Error -> Helper: each, Inverse Error:', err);
        }
        return '';
    };
    return ArrayHelpers;
}());
exports.default = ArrayHelpers;
//# sourceMappingURL=array.js.map