import { type EmptyObject } from '../types';

export function omit<T extends EmptyObject, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
	const newObj: EmptyObject = {};

	for (const key in obj) {
		if (!keys.includes(key as any)) {
			newObj[key] = obj[key];
		}
	}
	return newObj as Omit<T, K>;
}
