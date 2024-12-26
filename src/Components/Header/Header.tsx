import { useState, useEffect } from 'react';
import { NavbarPublic } from '@components/Header/NavbarPublic';
import { NavbarUser } from '@components/Header/NavbarUser';

interface Props {
	navbarType: 'user' | 'public';
}

export const Header : React.FC<Props> = ({ navbarType }) => {
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
			className={`w-full z-10 fixed top-0 transition-colors duration-300 bg-white backdrop-filter backdrop-blur-lg ${
				isScrolled ? 'bg-opacity-70' : 'lg:bg-opacity-0'
			}`}
		>
			{navbarType === 'user' ? <NavbarUser /> : <NavbarPublic />}
		</header>
	);
};
