export function decOfNum(number: number, titles: string[]): string {
	const decCache: number[] = [];
	const decCases = [2, 0, 1, 1, 1, 2];

	if (!decCache[number]) {
		decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
	}
	return titles[decCache[number]];
}
