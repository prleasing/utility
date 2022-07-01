import { EmptyFunction } from '../types/helpers';

export * from './random';
export * from './delay';
export * from './debounce';

export function generateId(prefix = ''): string {
	return `${prefix}${Math.floor(Math.random() * 1e8).toString(16)}`;
}

export function shuffle<T extends any[]>(array: T): T {
	return array.sort(() => (Math.random() > 0.5 ? 1 : -1));
}

export function isValidUrl(string: string) {
	let url;

	try {
		url = new URL(string);
	} catch (_) {
		return false;
	}
	return url.protocol === 'http:' || url.protocol === 'https:';
}

export function parsingPhone(str: string): null | {
	formatting: string;
	link: string;
} {
	const regex = /^(\+[0-9-]{1,7}|8)([0-9]{3})([0-9]{3})([0-9]{2})([0-9]{2})(;([0-9]{1,6}))?$/gm;
	const m = regex.exec(str);

	if (m) {
		let formatting = `${m[1]} (${m[2]}) ${m[3]}-${m[4]}-${m[5]}`;
		let link = `tel:${m[1]}${m[2]}${m[3]}${m[4]}${m[5]}`;

		if (m[7]) {
			formatting += ` доп ${m[7]}`;
			link += `p${m[7]}`;
		}
		return { formatting, link };
	}
	return null;
}
export function phoneFormat(phone: string, output: 'string' | 'number' = 'number') {
	if (output === 'string') {
		return phone;
	}
	return phone.replace(/\D+/g, '');
}

export function rubber(offset: number, dimension: number, resistanceRate: number): number {
	const offsetResistance = offset * resistanceRate;

	return (offsetResistance * dimension) / (offsetResistance + dimension);
}

export const nope: EmptyFunction = () => {};

export function decOfNum(number: number, titles: string[]): string {
	const decCache: number[] = [];
	const decCases = [2, 0, 1, 1, 1, 2];

	if (!decCache[number]) {
		decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
	}
	return titles[decCache[number]];
}
