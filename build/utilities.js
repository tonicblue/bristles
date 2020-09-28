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
//# sourceMappingURL=utilities.js.map