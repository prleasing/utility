import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [dts()],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'utility',
			formats: ['es', 'cjs'],
			fileName: (format) => `index.${format}.js`
		},
		minify: 'terser'
	}
});
