export const HeroSection = () => (
	<section className="flex flex-col text-center items-center space-y-7">
		<h1 className="text-5xl">
			Bienvenido a <span className="highlighted relative">Todografo</span>
		</h1>
		<p className="text-xl text-gray-600 font-handwritten">
			La mejor manera de organizar tus tareas y aumentar tu productividad
		</p>
		<a className="btn-yellow w-fit font-handwritten" href="/signUp">
			Comienza gratis
		</a>
	</section>
);
