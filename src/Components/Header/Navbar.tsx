import { NavLink } from './NavLink';
import { Stickman as StickmanIcon } from '@icons/Stickman.tsx';
import { DarkThemeToggle } from 'flowbite-react';
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
		<nav className="grid grid-cols-2 w-mobile lg:w-desktop m-auto">
			<a href="/" className="group flex items-center w-fit self-center">
				<StickmanIcon className="h-10 w-auto" />
				<span className="text-2xl -ml-1 group-hover:text-blue-600 transition-colors duration-300 dark:group-hover:text-yellow-300">
					Todografo
				</span>
			</a>

			{/* Desktop Nav */}
			<div className="hidden lg:flex space-x-10 text-zinc-600 items-center justify-end dark:text-zinc-300">
				{navLinks.map((link) => (
					<NavLink key={link.name} href={link.href}>
						{link.name}
					</NavLink>
				))}
				<a
					href="/app"
					className="btn-secondary-blue text-base text-zinc-50 dark:btn-secondary-yellow px-3 py-2 text-lg text-center"
				>
					Iniciar Sesión
				</a>
				<DarkThemeToggle className="toggle-btn" />
			</div>

			{/* Mobile Nav */}
			<div className="flex lg:hidden items-center justify-end gap-3">
				<DarkThemeToggle className="toggle-btn" />
				<Hamburger color="currentColor" size={24} toggled={isOpen} toggle={setIsOpen} />
				<div
					className={`absolute top-full w-screen left-0 right-0 flex flex-col bg-zinc-50 shadow-sm transition-all duration-[350ms] overflow-hidden dark:bg-zinc-700 ${
						isOpen ? 'max-h-96' : 'max-h-0'
					}`}
				>
					<div className="flex flex-col space-y-4 py-3 w-mobile m-auto" onClick={handleClick}>
						{navLinks.map((link) => (
							<NavLink key={link.name} href={link.href}>
								{link.name}
								<hr className="border-zinc-300 mt-1" />
							</NavLink>
						))}
						<NavLink href="/app">Iniciar sesión</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};
