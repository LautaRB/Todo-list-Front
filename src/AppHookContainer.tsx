import { AuthProvider } from '@hooks/Context/AuthProvider';
import { App } from './App';
import { AppRouter } from './AppRouter';
import { CustomFlowbiteTheme, Flowbite } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
	sidebar: {
		root: { inner: 'p-4' },
		item: { base: 'flex hover:bg-zinc-100 dark:hover:bg-zinc-800 items-center p-2 rounded-lg lg:text-lg' },
	},
};

export const AppHookContainer = () => {
	return (
		<AuthProvider>
			<Flowbite theme={{ theme: customTheme }}>
				<App>
					<AppRouter />
				</App>
			</Flowbite>
		</AuthProvider>
	);
};
