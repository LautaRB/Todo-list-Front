import { NavLink } from './NavLink';

export const Navbar = () => {
	return (
		<nav className="font-sour-gummy fixed top-0 left-0 w-full flex justify-center space-x-6 py-4 z-50">
			<NavLink>Elemento 1</NavLink>
			<NavLink>Elemento 2</NavLink>
			<NavLink>Elemento 3</NavLink>
			<NavLink>Elemento 4</NavLink>
		</nav>
	);
};
