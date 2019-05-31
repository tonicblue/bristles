"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
/**
 * TODO: functions
 *  map
 *  sort
 *  slice
 *  splice
 *  includes
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
    return ArrayHelpers;
}());
exports.default = ArrayHelpers;
//# sourceMappingURL=array.js.map