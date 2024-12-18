import { NavLink } from './NavLink';
import { Stickman as StickmanIcon } from '@icons/Stickman.tsx';
import Hamburger from 'hamburger-react';
import { useState } from 'react';

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};
	const navLinks = [
		{ name: 'Características', href: '#features' },
		{ name: 'Cómo funciona', href: '#how-it-works' },
		{ name: 'Precios', href: '#pricing' },
	];

	return (
		<nav className="relative grid grid-cols-2 w-[97%] lg:w-5/6 m-auto">
			<a href="/" className="group flex items-center w-fit pl-1 lg:pl-9">
				<StickmanIcon className="h-11 w-auto text-black" />
				<span className="text-2xl font-heading -ml-1 group-hover:text-blue-600 transition-colors duration-300">
					Todografo
				</span>
			</a>
			<div className="hidden lg:flex space-x-10 pr-1 lg:pr-9 text-gray-600 items-center">
				{navLinks.map((link) => (
					<NavLink key={link.name} href={link.href}>
						{link.name}
					</NavLink>
				))}
				<a href="/signIn" className="btn-secondary-blue font-heading text-base">
					Iniciar Sesión
				</a>
			</div>

			{/* Mobile Nav */}
			<div className="flex lg:hidden items-center justify-end">
				<Hamburger color="#2563eb" size={24} toggled={isOpen} toggle={setIsOpen} />
				{isOpen && (
					<div className="absolute top-full -left-[6px] w-screen flex flex-col space-y-4 bg-opacity-70 bg-white backdrop-filter backdrop-blur-lg p-4 shadow-sm">
						<div onClick={handleClick} className="flex flex-col space-y-2 w-[97%] m-auto font-semibold">
							{navLinks.map((link) => (
								<NavLink key={link.name} href={link.href}>
									{link.name}
									<hr className="border-gray-300 mt-1" />
								</NavLink>
							))}
							<NavLink href="/signIn">Iniciar sesión</NavLink>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};
