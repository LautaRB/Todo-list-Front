import { Stickman as StickmanIcon } from '@icons/Stickman.tsx';
import { DarkThemeToggle } from 'flowbite-react';

interface Props {
	children: React.ReactNode;
}

export const Sign: React.FC<Props> = ({ children }) => {
	return (
		<div className="min-h-screen min-w-screen">
			<header className="w-mobile lg:w-desktop m-auto fixed top-5 left-0 right-0 flex items-center justify-between">
				<a href="/" className="group flex items-center w-fit">
					<StickmanIcon className="h-11 w-auto" />
					<span className="text-3xl -ml-1 group-hover:text-blue-600 transition-colors duration-300 dark:group-hover:text-yellow-300">
						Todografo
					</span>
				</a>
				<DarkThemeToggle className="toggle-btn" />
			</header>

			<main className="container mx-auto">
				<div className="background-blue fixed inset-0 -z-10 dark:background-dark"></div>
				{children}
			</main>
		</div>
	);
};
