import { EmptyFunction } from '../types/helpers';

/**
 * Функция заглушка
 */
export const nope: EmptyFunction = () => {};

export function rubber(offset: number, dimension: number, resistanceRate: number): number {
	const offsetResistance = offset * resistanceRate;

	return (offsetResistance * dimension) / (offsetResistance + dimension);
}
