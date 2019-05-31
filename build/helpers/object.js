"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dot = require("dot-object");
var utilities_1 = require("../utilities");
/**
 * TODO: Functions
 *  keys
 *  values
 *  dot
 *  dotPattern
 *  entries
 *  like
 *  jsonParse
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
    //TODO: Allow this to set values too or allow _set to parse JSON
    ObjectHelpers._parseJson = function (input) {
        try {
            var helper = arguments[arguments.length - 1];
            var json = typeof input === 'string' ? input : helper.fn ? helper.fn(helper.data) : '';
            console.log('parseJson -> JSON', json);
            var output = !json ? null : JSON.parse(json);
            console.log('parseJson -> OUTPUT', output);
            return output;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: parseJson, Error:', err.message);
            return false;
        }
    };
    ObjectHelpers._set = function (context, path, value) {
        try {
            var helper = arguments[arguments.length - 1];
            if (utilities_1.isOps(context) || typeof context !== 'object') {
                throw new Error('Invalid arguments');
            }
            path = typeof path === 'string' ? path : path = '@set';
            //BUG: This is broken
            value = value || helper.fn ? helper.fn(helper.data) : null;
            dot.set(path, value, context);
        }
        catch (err) {
            console.error('Bristles Error -> Helper: default, Error:', err.message);
        }
    };
    return ObjectHelpers;
}());
exports.default = ObjectHelpers;
//# sourceMappingURL=object.js.map