/**
 * TODO: functions
 *  join
 *  merge
 *  delta
 *  same
 *  pop
 *  push
 *  shift
 *  unshift
 *  filter
 *  find
 */
/**
 * A bunch of helpers for working with arrays
 */
export default class ArrayHelpers {
    static _map(input: any[], func: (...args: any[]) => any): any[];
    static _each(input: any, join: string): string;
    static _sort(input: any[], direction?: string, path?: string): any[];
    static _slice(input: any[], begin?: number, end?: number): any[];
    static _splice(input: any[], start?: number, deleteCount?: number, items?: any[]): any[];
    static _count(input: any): number;
    static _itemAt(input: any[], index: number): any;
    static _array(): any[];
    static _join(input: any[], separator: string): string;
}
