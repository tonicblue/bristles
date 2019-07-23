import * as Handlebars from 'handlebars';
import StringHelpers from './helpers/string';
import ConditionalHelpers from './helpers/conditional';
import ArrayHelpers from './helpers/array';
import ObjectHelpers from './helpers/object';
import UtilityHelpers from './helpers/utility';

export function Bristles(hbs?: any) {
  hbs = hbs || Handlebars;
  registerHelpers(hbs, StringHelpers);
  registerHelpers(hbs, ConditionalHelpers);
  registerHelpers(hbs, ArrayHelpers);
  registerHelpers(hbs, ObjectHelpers);
  registerHelpers(hbs, UtilityHelpers);
  return hbs;
}

/*
IDEA:
Give each helper a prefix for different added functions.
 * '_' for a helper that can also be returned as a function (most string functions etc.)
 * '$' for a helper that cannot be returned as a function (a map function or something)
*/

function registerHelpers(hbs: any, mod: any) {
  const propertyNames = Object.getOwnPropertyNames(mod);
  for (const prop of propertyNames) {
    if (prop.startsWith('_') && typeof mod[prop] === 'function') {
      const name = prop.substr(1);
      hbs.registerHelper(name, mod[prop]);
      hbs.registerHelper(prop, () => { return mod[prop]; });
    }
  }
}