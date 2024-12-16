import { Navbar } from '@components/Navbar/Navbar';
import { Footer } from '@components/Footer/Footer';

interface BaseLayoutProps {
	children: React.ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col bg-white">
			<header className="w-full z-10 fixed top-0 bg-opacity-50 backdrop-filter backdrop-blur-lg bg-yellow-200 shadow-md">
				<Navbar />
			</header>

			<main className="flex-grow container mx-auto px-4 py-8 z-0">
				<div className="background fixed inset-0 -z-10"></div>
				{children}
			</main>
			<Footer />
		</div>
	);
};
