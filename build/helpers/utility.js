"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JSON6 = require('json-6');
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
var UtilityHelpers = /** @class */ (function () {
    function UtilityHelpers() {
    }
    UtilityHelpers._json = function () {
        try {
            var helper = arguments[arguments.length - 1];
            var value = helper.hash.value || null;
            if (helper.fn) {
                var type = helper.hash.type || 'object';
                var block = helper.fn(this) || '';
                switch (type) {
                    case ('array'):
                        try {
                            value = JSON6.parse('[' + block + ']');
                        }
                        catch (err) {
                            throw new Error("Failed to parse json: " + err.message + "\n[\n" + block + "\n]\n");
                        }
                        break;
                    case ('object'):
                        try {
                            value = JSON6.parse('{' + block + '}');
                        }
                        catch (err) {
                            throw new Error("Failed to parse json: " + err.message + "\n{\n" + block + "\n}\n");
                        }
                        break;
                    case ('number'):
                        value = parseInt(block) || -1;
                        break;
                    case ('boolean'):
                        value = Boolean(block) || false;
                        break;
                    default:
                        value = block;
                }
            }
            if (helper.hash.key) {
                return JSON.stringify(helper.hash.key) + ': ' + JSON.stringify(value, null, 4);
            }
            else {
                return JSON.stringify(value, null, 4);
            }
        }
        catch (err) {
            console.error('Bristles Error -> Helper: json, Error:', err.message);
            return JSON.stringify({
                parseError: err.message
            }, null, 4);
        }
    };
    UtilityHelpers._typeof = function () {
        try {
            var args = Array.from(arguments);
            args.pop();
            if (Array.isArray(args[0])) {
                return 'array';
            }
            return typeof args[0];
        }
        catch (err) {
            console.error('Bristles Error -> Helper: getType, Error:', err.message);
            return null;
        }
    };
    UtilityHelpers._coalesce = function () {
        try {
            var args = Array.from(arguments);
            args.pop();
            for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
                var arg = args_1[_i];
                if (arg) {
                    return arg;
                }
            }
            return null;
        }
        catch (err) {
            console.error('Bristles Error -> Helper: coalesce, Error:', err.message);
            return null;
        }
    };
    return UtilityHelpers;
}());
exports.default = UtilityHelpers;
//# sourceMappingURL=utility.js.map