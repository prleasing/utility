/**
 * @class Random
 *
 * @hideconstructor
 */
export class Random {
	/**
	 * Получение случайного числа
	 *
	 * @example
	 * 	Random.int(2, 50); // 45
	 *
	 *
	 * @param {Number} min - Минимальное число
	 * @param {Number} max - Максимальное число
	 *
	 * @returns {Number} - Число
	 */
	static int(min: number, max: number): number {
		const localMin = Math.ceil(min);
		const localMax = Math.floor(max);

		return Math.floor(Math.random() * (localMax - localMin + 1)) + localMin;
	}

	/**
	 * Получение случного элемента массива
	 *
	 * @example
	 * 	Random.array([1, 2, 4, 4]); // 4
	 *
	 *
	 * @param {Array} array - Исходный массив
	 *
	 * @returns Элемент массива
	 */
	static array<T>(array: T[]) {
		return array[Random.int(0, array.length - 1)];
	}

	/**
	 * Перемешивание элементов массива
	 *
	 * @param {Array} array - исходный массив
	 *
	 * @returns {Array} - новый массив
	 */
	static shuffle<T extends any[]>(array: T): T {
		return array.sort(() => (Math.random() > 0.5 ? 1 : -1));
	}
}
