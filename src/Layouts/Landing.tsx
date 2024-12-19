import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header/Header';

interface Props {
	children: React.ReactNode;
}

export const Landing: React.FC<Props> = ({ children }) => {
	return (
		<div className="min-h-screen min-w-screen">
			<Header />
			<main className="flex-grow container mx-auto z-0">
				<div className="background-blue fixed inset-0 -z-10"></div>
				{children}
			</main>
			<Footer />
		</div>
	);
};
