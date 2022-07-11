import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
// @ts-ignore
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [dts(), vue()],
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
