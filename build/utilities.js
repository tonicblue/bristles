"use strict";
exports.__esModule = true;
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
//# sourceMappingURL=utilities.js.map