export const HeroSection = () => (
	<section className="text-center flex flex-col items-center space-y-7 mt-28">
		<h1 className="text-5xl font-heading">
			Bienvenido a <span className="highlighted relative">Todografo</span>
		</h1>
		<p className="text-xl text-gray-600 font-handwritten">
			La mejor manera de organizar tus tareas y aumentar tu productividad
		</p>
		<a className="w-fit btn-yellow font-handwritten" href="/signUp">
			Comienza gratis
		</a>
	</section>
);
