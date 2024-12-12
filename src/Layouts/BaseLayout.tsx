import { Navbar } from '../Components';
import { Footer } from '../Components';

function BaseLayout() {
	return (
		<div className="font-family: system-ui min-h-screen flex flex-col mx-0 my-auto box-border bg-yellow-300">
			<header className="w-full py-4">
				<Navbar />
				<hr className="border-t-4 border-amber-800 my-20 mx-auto w-full" />
			</header>
			<main className="flex-grow container mx-auto py-8">
				{/*contenido de la página */}
			</main>
			<Footer />
		</div>
	);
}

export default BaseLayout;
