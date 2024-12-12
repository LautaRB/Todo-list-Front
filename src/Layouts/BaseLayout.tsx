import { Navbar } from '@components/Navbar/Navbar';
import { Footer } from '@components/Footer/Footer';

export const BaseLayout = () => {
	return (
		<div className="font-family: system-ui min-h-screen flex flex-col mx-0 my-auto box-border bg-yellow-300">
			<header className="w-full">
				<Navbar />
			</header>
			<main className="flex-grow container mx-auto ">
				{/*contenido de la página */}
			</main>
			<Footer />
		</div>
	);
};
