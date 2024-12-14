import { Navbar } from '@components/Navbar/Navbar';
import { Footer } from '@components/Footer/Footer';

interface BaseLayoutProps {
	children: React.ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
	return (
		<div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-yellow-100 via-amber-100 to-green-100">
			<header className="w-full bg-yellow-200 shadow-md">
				<Navbar />
			</header>
			<main className="flex-grow container mx-auto px-4 py-8">{children}</main>
			<Footer />
		</div>
	);
};
