"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A bunch of helper helpers
 */
function isOps(obj) {
    return !!obj &&
        obj.hasOwnProperty('hash') &&
        obj.hasOwnProperty('data') &&
        obj.hasOwnProperty('name');
}
exports.isOps = isOps;
function isValidDate(obj) {
    return obj && Object.prototype.toString.call(obj) === "[object Date]" && !isNaN(obj);
}
exports.isValidDate = isValidDate;
function bristlesError() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (process.env.NODE_ENV === 'development') {
        (_a = console.error).call.apply(_a, [console].concat(args));
    }
}
exports.bristlesError = bristlesError;
//# sourceMappingURL=utilities.js.map