export async function animationNumber(from: number, to: number, duration = 0.2) {
	const { default: gsap } = await import('gsap');

	const current = { value: from };

	return new Promise<number>((resolve) => {
		gsap.to(current, {
			duration,
			value: to,
			onUpdate() {
				resolve(current.value);
			}
		});
	});
}
