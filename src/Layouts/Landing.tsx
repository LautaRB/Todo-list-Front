import { useState, useEffect } from 'react';
import { Navbar } from '@components/Navbar/Navbar';
import { Footer } from '@components/Footer/Footer';

interface Props {
	children: React.ReactNode;
}

export const Landing: React.FC<Props> = ({ children }) => {
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
		<div className="min-h-screen">
			<header
				className={`w-full z-10 fixed top-0 transition-colors duration-300 bg-white backdrop-filter backdrop-blur-lg ${
					isScrolled ? 'bg-opacity-70' : 'lg:bg-opacity-0'
				}`}
			>
				<Navbar />
			</header>

			<main className="flex-grow container mx-auto z-0">
				<div className="background-blue fixed inset-0 -z-10"></div>
				{children}
			</main>
			<Footer />
		</div>
	);
};
