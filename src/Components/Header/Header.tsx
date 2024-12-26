import { useState, useEffect } from 'react';
import { Navbar } from './Navbar';

export const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header
			className={`w-full z-10 fixed top-0 transition-colors duration-300 bg-zinc-100 backdrop-filter backdrop-blur-lg dark:bg-zinc-800  ${
				isScrolled ? 'lg:bg-opacity-70 dark:lg:bg-opacity-70' : 'dark:lg:bg-opacity-0 lg:bg-opacity-0'
			}`}
		>
			<Navbar />
		</header>
	);
};
