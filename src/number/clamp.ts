/**
 * Задаёт значение в диапазоне между указанными нижней и верхней границами
 *
 * @example
 * 	clamp(1, 15, 20); // 15
 * 	clamp(1, 44, 20); // 20
 *
 * @param {Number} min - минимальное значение
 * @param {Number} number - значение
 * @param {Number} max - максимальное значение
 *
 * @returns {Number}
 */
export function clamp(min: number, number: number, max: number) {
	return Math.min(Math.max(min, number), max);
}
