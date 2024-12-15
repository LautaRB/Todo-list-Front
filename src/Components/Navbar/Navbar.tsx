import { NavLink } from './NavLink';
import { Stickman as StickmanIcon } from '@icons/Stickman.tsx';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className="grid grid-cols-2 h-16 w-5/6 m-auto">
			<Link to="/" className="group flex items-center w-fit pl-9">
				<StickmanIcon className="h-11 w-auto text-black" />
				<span className="text-2xl font-heading -ml-1 group-hover:text-blue-600 transition-colors duration-300">
					Todografo
				</span>
			</Link>
			<div className="space-x-4 pr-9 self-center text-gray-500 text-right">
				<NavLink href="#features">Características</NavLink>
				<NavLink href="#how-it-works">Cómo funciona</NavLink>
				<NavLink href="#pricing">Precios</NavLink>
				<NavLink href="#contact">Contacto</NavLink>
			</div>
		</nav>
	);
};
