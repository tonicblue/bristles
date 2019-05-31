import { HelperOptions } from 'handlebars';

/**
 * A bunch of helper helpers
 */
export function isOps(obj: any) {
  return obj.hasOwnProperty('hash') &&
    obj.hasOwnProperty('data') &&
    obj.hasOwnProperty('name');
}

export function biResponse(helper: HelperOptions, response: any, inverse?: boolean): any {
  try {
    inverse = typeof inverse !== 'boolean' ? !!response : inverse;

    if (!helper.fn) {
      return response;
    } else {
      if (inverse) {
        return helper.fn(helper.data);
      } else if (helper.inverse) {
        return helper.inverse(helper.data);
      } else {
        return '';
      }
    }
  } catch(err) {
    console.error('Bristles Error -> Utility: biResponse, Error:', err.message);
  }
}