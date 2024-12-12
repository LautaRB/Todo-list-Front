import { NavLink } from './NavLink';

export const Navbar = () => {
	return (
		<nav className="font-sour-gummy fixed top-0 left-0 w-full flex justify-between space-x-6 py-8 z-50">
			<img src="/stickman.svg" alt="stickman" className="h-20 w-100" />
			<div className="fixed pl-9">
				<NavLink>Todografo</NavLink>
			</div>
			<div className="space-x-4 pr-6">
				<NavLink>Elemento 1</NavLink>
				<NavLink>Elemento 2</NavLink>
				<NavLink>Elemento 3</NavLink>
				<NavLink>Elemento 4</NavLink>
			</div>
		</nav>
	);
};
