import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': '/src/Components',
			'@layouts': '/src/Layouts',
			'@icons': '/src/Icons',
			'@utils': '/src/Utils',
			'@assets': '/src/Assets',
			'@pages': '/src/Pages',
			'@schemas': '/src/Schemas',
			'@hooks': '/src/Hooks',
			'@customTypes': '/src/Types',
			'@services': '/src/Services',
		},
	},
});
