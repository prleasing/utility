import { DefineComponent } from 'vue';
import { EmptyFunction } from './helpers';

export type FunctionParameters<T extends EmptyFunction, N extends number> = T extends (...args: infer P) => any
	? P[N]
	: never;

export type BaseDefineComponent = DefineComponent<any, any, any, any>;
export type VueComponent<C extends DefineComponent<any, any, any, any>> = InstanceType<C>;
export type VueComponentProps<C extends DefineComponent<any, any, any, any>> = VueComponent<C>['$props'];
export type VuePropsType<C extends DefineComponent> = InstanceType<C>['$props'];
