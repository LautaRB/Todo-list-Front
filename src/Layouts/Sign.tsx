import { Stickman as StickmanIcon } from '@icons/Stickman.tsx';

interface Props {
	children: React.ReactNode;
	signIn: boolean;
}

export const Sign: React.FC<Props> = ({ children, signIn }) => {
	return (
		<div className="min-h-screen min-w-screen">
			<header className="w-mobile lg:w-desktop m-auto fixed top-5 left-0 right-0 flex items-center justify-between">
				<a href="/" className="group flex items-center w-fit">
					<StickmanIcon className="h-11 w-auto text-black" />
					<span className="text-3xl -ml-1 group-hover:text-blue-600 transition-colors duration-300">Todografo</span>
				</a>
				<p className="text-sm text-gray-500 pr-4">
					<span className="hidden lg:inline">{signIn ? '¿No tienes una cuenta?' : '¿Tienes una cuenta?'} </span>
					<a href={signIn ? '/signUp' : '/signIn'} className="link-blue text-base lg:btn-secondary-blue lg:ml-4">
						{signIn ? 'Regístrate' : 'Inicia sesión'}
					</a>
				</p>
			</header>

			<main className="container mx-auto">
				<div className={`background-blue fixed inset-0 -z-10`}></div>
				{children}
			</main>
		</div>
	);
};
