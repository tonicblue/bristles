"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MathJS = require("mathjs");
var utilities_1 = require("src/utilities");
/**
 * A bunch of helpers for working with numbers
 */
var NumberHelpers = /** @class */ (function () {
    function NumberHelpers() {
    }
    NumberHelpers._sum = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            var helper = arguments[arguments.length - 1];
            args.pop();
            return args.reduce(function (a, b) { return a + b; });
        }
        catch (err) {
            console.error('Bristles Error -> Helper: sum, Error:', err.message);
            return 0;
        }
    };
    NumberHelpers.maths = function (expression, data) {
        try {
            if (typeof expression !== 'string') {
                throw new Error('Invalid arguments, the first argument must be a string');
            }
            var args = Array.from(arguments);
            var helper = args.pop();
            if (utilities_1.isOps(data)) {
                data = this;
            }
            data = Object.assign(data, helper.hash);
            var output = MathJS.evaluate(expression, data);
            return output;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: maths, Error:', err.message);
            return 0;
        }
    };
    return NumberHelpers;
}());
exports.default = NumberHelpers;
//# sourceMappingURL=number.js.map