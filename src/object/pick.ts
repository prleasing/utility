import { EmptyObject } from '../types/helpers';

/**
 * Создает объект, состоящий из выбранных свойств объекта.
 * @param {Object} obj - Исходный объект.
 * @param {String[]} keys - ключи объекта
 * @returns {Object} - новый объект
 * @example
 * const object = { 'a': '1', 'b': '2', 'c': '3' };
 * pick(object, 'a', 'c'); // => { 'a': '1', 'c': '3' }
 */
export function pick<T extends EmptyObject, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
	return keys.reduce((result, key) => Object.assign(result, { [key]: obj[key] }), {} as Pick<T, K>);
}
