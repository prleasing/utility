import { ref, type UnwrapRef } from 'vue';

export function createState<T>(initValue: T) {
	const state = ref<T>(initValue);

	function setValue(newValue: T) {
		state.value = newValue as UnwrapRef<typeof state>;
	}

	return [state, setValue] as const;
}
