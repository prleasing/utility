import { DefineComponent } from 'vue';
import { EmptyFunction } from './helpers';

export type FunctionParameters<T extends EmptyFunction, N extends number> = T extends (...args: infer P) => any
	? P[N]
	: never;

export type VuePropsType<C extends DefineComponent<any, any, any>> = InstanceType<C>['$props'];
