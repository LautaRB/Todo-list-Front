import { NavLink } from './NavLink';
import { Stickman as StickmanIcon } from '@icons/Stickman.tsx';

export const Navbar = () => {
	return (
		<nav className="grid grid-cols-2 w-full lg:w-5/6 m-auto">
			<a href="/" className="group flex items-center w-fit pl-1 lg:pl-9">
				<StickmanIcon className="h-11 w-auto text-black" />
				<span className="text-2xl font-heading -ml-1 group-hover:text-blue-600 transition-colors duration-300">
					Todografo
				</span>
			</a>
			<div className="space-x-10 pr-1 lg:pr-9 self-center text-gray-600 text-right">
				<NavLink href="#features">Características</NavLink>
				<NavLink href="#how-it-works">Cómo funciona</NavLink>
				<NavLink href="#pricing">Precios</NavLink>
				<a href="/signIn" className="btn-secondary-blue font-heading text-base">
					Iniciar Sesión
				</a>
			</div>
		</nav>
	);
};
