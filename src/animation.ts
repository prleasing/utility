import { nope } from './functuons';

interface OptionAnimation {
	duration: number;
	from: number;
	to: number;
	onStart?(): void;
	onEnd?(): void;
	onFrame?(value: number): void;
}
export function animationNumber(option: OptionAnimation) {
	const start = performance.now();

	function animate() {
		const timeFraction = 1 - Math.sin(Math.acos(Math.min((performance.now() - start) / option.duration)));
		// const timeFraction = (performance.now() - start) / option.duration;
		const onFrame = option.onFrame ?? nope;
		const onStart = option.onStart ?? nope;
		const onEnd = option.onEnd ?? nope;

		const { to, from } = option;

		if (timeFraction < 1) {
			onFrame(Math.floor(timeFraction * (to - from) + from));
			onStart();
			requestAnimationFrame(animate);
		} else {
			onFrame(to);
			onEnd();
		}
	}
	requestAnimationFrame(animate);
}
