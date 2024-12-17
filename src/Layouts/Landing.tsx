import { Navbar } from '@components/Navbar/Navbar';
import { Footer } from '@components/Footer/Footer';

interface Props {
	children: React.ReactNode;
}

export const Landing: React.FC<Props> = ({ children }) => {
	return (
		<div className="min-h-screen">
			<header className="w-full z-10 fixed top-0 bg-opacity-50 backdrop-filter backdrop-blur-lg bg-yellow-200 shadow-md">
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
