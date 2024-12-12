import { NavLink } from './NavLink';
import { Stickman as StickmanIcon } from '@icons/Stickman.tsx';
export const Navbar = () => {
	return (
		<nav className="font-sour-gummy grid grid-cols-2 justify-between top-0 left-0 w-full z-50">
			<div className="flex pl-9">
				<StickmanIcon className="relative top-3.5  h-[77px] w-auto text-black"></StickmanIcon>
				<NavLink className="self-center" href="#">
					Todografo
				</NavLink>
			</div>
			<div className="space-x-4 pr-9 self-center text-right">
				<NavLink href="#">Elemento 1</NavLink>
				<NavLink href="#">Elemento 2</NavLink>
				<NavLink href="#">Elemento 3</NavLink>
				<NavLink href="#">Elemento 4</NavLink>
			</div>
			<hr className="col-span-2 border-t-4 border-amber-800 mx-auto w-full" />
		</nav>
	);
};
