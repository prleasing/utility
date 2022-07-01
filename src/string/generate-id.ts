/**
 * Генерация случайного id
 *
 * @param {String} prefix - префикс id
 *
 * @returns {String} - id
 */
export function generateId(prefix = ''): string {
	return `${prefix}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
