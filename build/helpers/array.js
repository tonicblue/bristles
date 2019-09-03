"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
var dot = require("dot-object");
var utilities_1 = require("../utilities");
/**
 * TODO: functions
 *  join
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
    ArrayHelpers._sort = function (input, direction, path) {
        var helper = arguments[arguments.length - 1];
        try {
            if (!Array.isArray(input)) {
                throw new Error('Invalid arguments');
            }
            direction = direction || 'asc';
            direction = direction === 'desc' ? 'desc' : 'asc';
            path = typeof path === 'string' ? path : undefined;
            var func = function (a, b) { return b - a; };
            if (!path) {
                if (direction === 'desc') {
                    func = function (a, b) { return a - b; };
                }
            }
            else {
                if (direction === 'desc') {
                    func = function (a, b) {
                        return dot.pick(path || '', a) - dot.pick(path || '', b);
                    };
                }
                else {
                    func = function (a, b) {
                        return dot.pick(path || '', b) - dot.pick(path || '', a);
                    };
                }
            }
            if (helper.hash.mutate === true) {
                return input.sort(func);
            }
            else {
                var clone = JSON.parse(JSON.stringify(input));
                clone.sort(func);
                return clone;
            }
        }
        catch (err) {
            console.error('Bristles Error -> Helper: sort, Error:', err.message);
            return Array.isArray ? input : [];
        }
    };
    ArrayHelpers._slice = function (input, begin, end) {
        try {
            if (!Array.isArray(input)) {
                throw new Error('Invalid arguments');
            }
            begin = typeof begin === 'number' ? begin : 0;
            end = typeof end === 'number' ? end : undefined;
            return input.slice(begin, end);
        }
        catch (err) {
            console.error('Bristles Error -> Helper: slice, Error:', err.message);
            return [];
        }
    };
    ArrayHelpers._splice = function (input, start, deleteCount, items) {
        var helper = arguments[arguments.length - 1];
        try {
            if (!Array.isArray(input)) {
                throw new Error('Invalid arguments');
            }
            start = typeof start === 'number' ? start : 0;
            deleteCount = typeof deleteCount === 'number' ? deleteCount : 0;
            items = Array.isArray(items) ? items : [];
            if (helper.hash.mutate === true) {
                return input.splice.apply(input, __spreadArrays([start, deleteCount], items));
            }
            else {
                var clone = JSON.parse(JSON.stringify(input));
                clone.splice.apply(clone, __spreadArrays([start, deleteCount], items));
                return clone;
            }
        }
        catch (err) {
            console.error('Bristles Error -> Helper: splice, Error:', err.message);
            return [];
        }
    };
    return ArrayHelpers;
}());
exports.default = ArrayHelpers;
//# sourceMappingURL=array.js.map