"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Handlebars = require("handlebars");
var string_1 = require("./helpers/string");
var conditional_1 = require("./helpers/conditional");
var utility_1 = require("./helpers/utility");
var object_1 = require("./helpers/object");
function Bristles(hbs) {
    hbs = hbs || Handlebars;
    registerHelpers(hbs, string_1.default);
    registerHelpers(hbs, conditional_1.default);
    registerHelpers(hbs, utility_1.default);
    registerHelpers(hbs, object_1.default);
    return hbs;
}
/*
IDEA:
Give each helper a prefix for different added functions.
 * '_' for a helper that can also be returned as a function (most string functions etc.)
 * '$' for a helper that cannot be returned as a function (a map function or something)
*/
function registerHelpers(hbs, mod) {
    var propertyNames = Object.getOwnPropertyNames(mod);
    for (var _i = 0, propertyNames_1 = propertyNames; _i < propertyNames_1.length; _i++) {
        var prop = propertyNames_1[_i];
        if (prop.startsWith('_') && typeof mod[prop] === 'function') {
            console.log('Prop name with leading "_"', prop);
            var name_1 = prop.substr(1);
            hbs.registerHelper(name_1, mod[prop]);
        }
        else {
            console.log('Prop name without leading "_"', prop);
        }
    }
}
exports.default = Bristles;
//# sourceMappingURL=index.js.map