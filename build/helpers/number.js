"use strict";
exports.__esModule = true;
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
    return NumberHelpers;
}());
exports["default"] = NumberHelpers;
//# sourceMappingURL=number.js.map