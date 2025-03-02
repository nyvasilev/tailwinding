import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	base: '.',
	plugins: [sveltekit(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
});
