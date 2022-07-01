/**
 * Задержка выполнения
 *
 * @param {Number} ms - Время остановки в миллисекундах
 *
 * @returns {Promise}
 */
export function delay(ms: number): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
}
