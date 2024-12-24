import { AuthProvider } from '@hooks/Context/AuthProvider';
import { App } from './App';
import { AppRouter } from './AppRouter';

export const AppHookContainer = () => {
	return (
		<AuthProvider>
			<App>
				<AppRouter />
			</App>
		</AuthProvider>
	);
};
