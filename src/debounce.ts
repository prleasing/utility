import { type EmptyFunction } from './types';

export function debounce<T extends EmptyFunction>(cb: T, ms: number) {
	// @ts-expect-error

	let h: NodeJS.Timeout = 0;
	const callable = (...args: any) => {
		clearTimeout(h);
		h = setTimeout(() => cb(...args), ms);
	};

	return callable as any as T;
}
