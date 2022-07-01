import { EmptyFunction } from '../types/helpers';

/**
 * Откладывает вызов функции на заданное количество миллисекунд
 *
 * @example
 * 	function search() {
 * 		// ...
 * 	}
 * 	document.querySelector('input')?.addEventListener('input', debounce(search, 1000));
 *
 * @param {Function} cb - Исходная функция
 * @param {Number} ms - Время задержки в миллисекундах
 *
 * @returns {Function}
 */
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
