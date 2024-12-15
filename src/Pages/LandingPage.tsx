import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { StickyNote } from '@components/StickyNote';

export const LandingPage = () => {
	return (
		<div className="space-y-16">
			{/* Hero Section */}
			<section className="text-center">
				<h1 className="text-5xl mb-4 text-amber-800 font-heading">
					Bienvenido a Todografo
				</h1>
				<p className="text-xl mb-8 text-amber-700 font-handwritten">
					La mejor manera de organizar tus tareas y aumentar tu productividad
				</p>
				<button className="btn-primary">Comienza gratis</button>
			</section>

			{/* Features Section */}
			<section
				id="features"
				className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8"
			>
				<h2 className="text-3xl mb-6 text-center text-amber-800 font-heading">
					Características
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					<StickyNote title="Organiza tus tareas">
						<div className="flex items-center space-x-2">
							<CheckCircleIcon className="h-6 w-6 text-green-500" />
							<span>Crea listas personalizadas</span>
						</div>
					</StickyNote>
					<StickyNote title="Establece prioridades" color="bg-amber-100">
						<div className="flex items-center space-x-2">
							<CheckCircleIcon className="h-6 w-6 text-green-500" />
							<span>Ordena por importancia</span>
						</div>
					</StickyNote>
					<StickyNote title="Colabora con tu equipo" color="bg-green-100">
						<div className="flex items-center space-x-2">
							<CheckCircleIcon className="h-6 w-6 text-green-500" />
							<span>Comparte y asigna tareas</span>
						</div>
					</StickyNote>
				</div>
			</section>

			{/* How it works Section */}
			<section
				id="how-it-works"
				className="bg-gradient-to-br from-yellow-100 via-amber-100 to-green-100 rounded-lg p-8 shadow-inner"
			>
				<h2 className="text-3xl font-bold mb-6 text-center text-amber-800 font-heading">
					Cómo funciona
				</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<StickyNote title="Paso 1">
						<p>Regístrate en Todografo</p>
					</StickyNote>
					<StickyNote title="Paso 2" color="bg-amber-100">
						<p>Crea tus listas de tareas</p>
					</StickyNote>
					<StickyNote title="Paso 3" color="bg-green-100">
						<p>Organiza y prioriza tus actividades</p>
					</StickyNote>
					<StickyNote title="Paso 4">
						<p>¡Aumenta tu productividad!</p>
					</StickyNote>
				</div>
			</section>

			{/* Pricing Section */}
			<section
				id="pricing"
				className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8"
			>
				<h2 className="text-3xl font-bold mb-6 text-center text-amber-800 font-heading">
					Planes
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					<StickyNote title="Básico">
						<p className="mb-4">Desde $9.99/mes</p>
						<button className="btn-primary">Elegir plan</button>
					</StickyNote>
					<StickyNote title="Pro" color="bg-amber-100">
						<p className="mb-4">Desde $19.99/mes</p>
						<button className="btn-primary">Elegir plan</button>
					</StickyNote>
					<StickyNote title="Empresas" color="bg-green-100">
						<p className="mb-4">Desde $49.99/mes</p>
						<button className="btn-primary">Elegir plan</button>
					</StickyNote>
				</div>
			</section>
		</div>
	);
};
