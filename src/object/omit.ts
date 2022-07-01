import { EmptyObject } from '../types/helpers';

/**
 * Противоположность pick. Этот метод создает объект, создает объект исключая переданные ключи
 * @param {Object} obj - Исходный объект.
 * @param {String[]} keys - ключи объекта
 * @returns {Object} - новый объект
 * @example
 * const object = { 'a': '1', 'b': '2', 'c': '3' };
 * omit(object, 'a', 'c'); // => { 'b': '2' }
 */
export function omit<T extends EmptyObject, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
	const newObj: EmptyObject = {};

	for (const key in obj) {
		if (!keys.includes(key as any)) {
			newObj[key] = obj[key];
		}
	}
	return newObj as Omit<T, K>;
}
