import { Stickman as StickmanIcon } from '@icons/Stickman.tsx';

interface Props {
	children: React.ReactNode;
}

export const Sign: React.FC<Props> = ({ children }) => {
	return (
		<div className="min-h-screen">
			<header className="w-full z-10 fixed top-5 flex justify-center">
				<a href="/" className="group flex items-center w-fit">
					<StickmanIcon className="h-11 w-auto text-black" />
					<span className="text-3xl font-heading -ml-1 group-hover:text-blue-600 transition-colors duration-300">
						Todografo
					</span>
				</a>
			</header>

			<main className="flex-grow container mx-auto z-0">
				<div className={`background-blue fixed inset-0 -z-10`}></div>
				{children}
			</main>
		</div>
	);
};
