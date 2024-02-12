import { type EmptyObject } from '../types';

export function pick<T extends EmptyObject, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
	// @ts-expect-error
	return keys.reduce<Pick<T, K>>((result, key) => Object.assign(result, { [key]: obj[key] }), {});
}
