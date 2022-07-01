import { EmptyFunction } from '../types/helpers';

export function debounce<T extends EmptyFunction>(cb: T, ms: number) {
	// eslint-disable-next-line no-undef
	// @ts-ignore
	// eslint-disable-next-line no-undef
	let h: NodeJS.Timeout = 0;
	const callable = (...args: any) => {
		clearTimeout(h);
		h = setTimeout(() => cb(...args), ms);
	};

	return <T>(<any>callable);
}
