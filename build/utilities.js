"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A bunch of helper helpers
 */
function isOps(obj) {
    return obj.hasOwnProperty('hash') &&
        obj.hasOwnProperty('data') &&
        obj.hasOwnProperty('name');
}
exports.isOps = isOps;
//# sourceMappingURL=utilities.js.map