export type Mod = string;
export type Mods = Mod[] | { [key: string]: boolean };
const kebabCase = (string: string) =>
	string
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/\s+/g, '-')
		.toLowerCase();

function genBem(el: string, mods: { [key: string]: boolean }): string[];
function genBem(el: string, mods: Mod[]): string[];
function genBem(el: string): string[];
function genBem(...args: any[]): string[] {
	if (args.length === 1 && typeof args[0] === 'string') {
		return [args[0]];
	}
	if (args.length === 2 && Array.isArray(args[1])) {
		const [name, mods] = args;

		return mods.map((mod) => `${name}--${kebabCase(mod)}`);
	}
	if (args.length === 2 && !Array.isArray(args[1])) {
		const [name, modsObj] = args;

		const mods: Mod[] = [];

		Object.entries(modsObj).forEach(([name, value]) => {
			if (value) {
				mods.push(name);
			}
		});

		return genBem(name, mods);
	}
	return [];
}

export function createBEM(name: string) {
	function b(): string;
	function b(string: string): string;
	function b(mods: Mod[]): string[];
	function b(mods: { [key: string]: boolean }): string[];
	function b(...args: any): any {
		if (args.length === 1 && typeof args[0] === 'object') {
			return genBem(name, args[0]);
		}
		if (typeof args[0] === 'string') {
			if (args.length === 1) {
				return genBem(`${name}__${args[0]}`);
			}
		}
		return name;
	}

	return b;
}
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */

export type BEM = ReturnType<typeof createBEM>;
