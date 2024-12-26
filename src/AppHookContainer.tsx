import { AuthProvider } from '@hooks/Context/AuthProvider';
import { App } from './App';
import { AppRouter } from './AppRouter';
import { Flowbite } from 'flowbite-react';

export const AppHookContainer = () => {
	return (
		<AuthProvider>
			<Flowbite>
				<App>
					<AppRouter />
				</App>
			</Flowbite>
		</AuthProvider>
	);
};
