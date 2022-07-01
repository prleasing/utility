export type EmptyFunction = (...args: any[]) => any;
export type EmptyObject = Record<string | number | symbol, any>;
export type EmptyClass = abstract new (...args: any) => any;
