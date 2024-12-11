import { NavLink } from './NavLink';

export const Navbar = () => {
	return (
		<nav className="font-sour-gummy fixed top-0 left-0 w-full flex justify-between space-x-6 py-4 z-50">
			<div className="pl-6">
				<NavLink>Todografo</NavLink>
			</div>
			<div>
				<img
					src="/Stickman.svg"
					alt="stickman"
					className="h-100 w-8" // Ajusta el tamaño aquí según tus necesidades
				/>
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
