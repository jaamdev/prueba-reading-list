import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
	plugins: [react()],
	base: '/prueba-reading-list/',
	test: {
		environment: 'happy-dom',
	},
});
