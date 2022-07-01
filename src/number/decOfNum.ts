/**
 * Склонение числительных
 *
 * @example
 * 	decOfNum(14, ['год', 'года', 'лет']); // лет
 *
 *
 * @param {Number} number - исходное число
 * @param {String[]} titles - массив числителей
 *
 * @returns {String} числитель
 */
export function decOfNum(number: number, titles: string[]): string {
	const decCache: number[] = [];
	const decCases = [2, 0, 1, 1, 1, 2];

	if (!decCache[number]) {
		decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
	}
	return titles[decCache[number]];
}
