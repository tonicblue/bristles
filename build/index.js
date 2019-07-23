"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Handlebars = require("handlebars");
var string_1 = require("./helpers/string");
var conditional_1 = require("./helpers/conditional");
var array_1 = require("./helpers/array");
var object_1 = require("./helpers/object");
var utility_1 = require("./helpers/utility");
function Bristles(hbs) {
    hbs = hbs || Handlebars;
    registerHelpers(hbs, string_1.default);
    registerHelpers(hbs, conditional_1.default);
    registerHelpers(hbs, array_1.default);
    registerHelpers(hbs, object_1.default);
    registerHelpers(hbs, utility_1.default);
    return hbs;
}
exports.Bristles = Bristles;
/*
IDEA:
Give each helper a prefix for different added functions.
 * '_' for a helper that can also be returned as a function (most string functions etc.)
 * '$' for a helper that cannot be returned as a function (a map function or something)
*/
function registerHelpers(hbs, mod) {
    var propertyNames = Object.getOwnPropertyNames(mod);
    var _loop_1 = function (prop) {
        if (prop.startsWith('_') && typeof mod[prop] === 'function') {
            var name_1 = prop.substr(1);
            hbs.registerHelper(name_1, mod[prop]);
            hbs.registerHelper(prop, function () { return mod[prop]; });
        }
    };
    for (var _i = 0, propertyNames_1 = propertyNames; _i < propertyNames_1.length; _i++) {
        var prop = propertyNames_1[_i];
        _loop_1(prop);
    }
}
//# sourceMappingURL=index.js.map