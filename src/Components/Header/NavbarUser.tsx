import { Stickman as StickmanIcon } from '@icons/Stickman.tsx';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { CustomDrawer } from '@components/Drawer/CustomDrawer';

export const NavbarUser = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="grid grid-cols-2 w-mobile lg:w-desktop m-auto">
			<a href="/" className="group flex items-center w-fit self-center">
				<StickmanIcon className="h-10 w-auto text-black" />
				<span className="text-2xl -ml-1 group-hover:text-yellow-400 transition-colors duration-300">Todografo</span>
			</a>

			{/* Desktop Nav */}
			<div className="hidden lg:flex space-x-10 text-gray-600 items-center justify-end">
                <a href="#" className="btn-secondary-yellow text-base">
					Cerrar sesión
				</a>
			</div>

			{/* Mobile Nav */}
			<div className="flex lg:hidden items-center justify-end">
				<Hamburger color="#2563eb" size={24} toggled={isOpen} toggle={setIsOpen} />
				<div
					className={`absolute top-full w-screen left-0 right-0 flex flex-col bg-opacity-70 bg-white backdrop-filter backdrop-blur-lg shadow-sm transition-all duration-[350ms] overflow-hidden ${
						isOpen ? 'max-h-96' : 'max-h-0'
					}`}
				>
					<div className="flex flex-col space-y-4 py-3 w-mobile m-auto" onClick={handleClick}>
						
					</div>
				</div>
			</div>
		</nav>
	);
};
