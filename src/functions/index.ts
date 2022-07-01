export * from './random';
export * from './delay';
export * from './debounce';
export * from './util';

export function isValidUrl(string: string) {
	let url;

	try {
		url = new URL(string);
	} catch (_) {
		return false;
	}
	return url.protocol === 'http:' || url.protocol === 'https:';
}

/**
 * Форматирует номер телефона
 *
 * @param {String} str - номер телефона в международном формат
 *
 * @returns {Object}
 */
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
