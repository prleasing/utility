export type EmptyFunction = (...args: any[]) => any;
export type FunctionParameters<T extends EmptyFunction, N extends number> = T extends (...args: infer P) => any
	? P[N]
	: never;
