import { EmptyObject } from '../types/helpers';

/**
 * Противоположность pick. Этот метод создает объект, создает объект исключая переданные ключи
 *
 * @example
 * 	const object = { a: '1', b: '2', c: '3' };
 * 	omit(object, 'a', 'c'); // => { 'b': '2' }
 *
 * @param {Object} obj - Исходный объект.
 * @param {String[]} keys - Ключи объекта
 *
 * @returns {Object} - Новый объект
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
