export function generateId(prefix: string): string {
	return `${prefix}-${Math.floor(Math.random() * 1e8).toString(16)}`;
}
