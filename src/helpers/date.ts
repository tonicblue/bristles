//import { HelperOptions } from 'handlebars';

//import { isOps } from '../utilities';

import * as DateFns from 'date-fns';

/**
 * A bunch of helpers for working with dates
 */
export default class DateHelpers {
  static _dateParse(date: string, format: string): Date {
    try {
      date = date && date.toString() || '';
      format = typeof format !== 'string' ? '' : format;
      const parsed = DateFns.parse(date, format, new Date());
      return parsed;
    } catch(err) {
      console.error('Bristles Error -> Helper: dateParse, Error:', err.message);
      return new Date(0);
    }
  }

  static _dateFormat(date: Date | number, format: string) {
    try {
      date = date instanceof Date || typeof date === 'number' ? date : new Date();
      format = typeof format !== 'string' ? 'yyyy-MM-dd hh:mm:ss' : format;
      const formatted = DateFns.format(date, format);
      return formatted;
    } catch(err) {
      console.error('Bristles Error -> Helper: dateFormat, Error:', err.message);
      return '';
    }
  }
}