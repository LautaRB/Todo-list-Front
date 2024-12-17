import { Button } from '@components/Button/Button';

export const HeroSection = () => (
	<section className="text-center space-y-7 mt-28">
		<h1 className="text-5xl mb-4 font-heading">
			Bienvenido a <span className="highlighted relative">Todografo</span>
		</h1>
		<p className="text-xl mb-8 text-gray-700 font-handwritten">
			La mejor manera de organizar tus tareas y aumentar tu productividad
		</p>
		<Button link="http://localhost:5173/register" style="btn-yellow font-handwritten my-2">Comienza gratis</Button>
	</section>
);
