import type { MonthNumbers } from 'luxon';
import { DateTime } from 'luxon';

export function numberFormat(value: number) {
	return new Intl.NumberFormat('ru-RU', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	})
		.format(value)
		.replace(',', '.');
}

export function dateFormat(value: string) {
	return DateTime.fromISO(value).setLocale('ru').toFormat('dd.LL.yyyy');
}

export function declensionMonth(declension: number) {
	const months = [
		['январь', 'января'],
		['февраль', 'февраля'],
		['март', 'марта'],
		['апрель', 'апреля'],
		['май', 'мая'],
		['июнь', 'июня'],
		['июль', 'июля'],
		['август', 'августа'],
		['сентябрь', 'сентября'],
		['октябрь', 'октября'],
		['ноябрь', 'ноября'],
		['декабрь', 'декабря']
	];

	function getMonthString<T extends number = MonthNumbers>(month: T): string {
		return months[month - 1][declension - 1];
	}
	return getMonthString;
}

export function transformPublishDateTime<T extends { publish: string }>(
	data: T
): Omit<T, 'publish'> & { publish: DateTime } {
	return {
		...data,
		publish: DateTime.fromISO(data.publish).setLocale('ru')
	};
}
