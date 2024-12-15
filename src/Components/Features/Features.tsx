import { StickyNote } from '@components/utils/StickyNote';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export const FeaturesSection = () => (
	<section
		id="features"
		className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8"
	>
		<h2 className="text-3xl mb-8 text-center font-heading">Características</h2>
		<div className="grid md:grid-cols-3 gap-8">
			<StickyNote title="Organiza tus tareas" color="yellow">
				<div className="flex items-center space-x-2">
					<CheckCircleIcon className="h-6 w-6 text-green-500" />
					<span>Crea listas personalizadas</span>
				</div>
			</StickyNote>
			<StickyNote title="Establece prioridades">
				<div className="flex items-center space-x-2">
					<CheckCircleIcon className="h-6 w-6 text-green-500" />
					<span>Ordena por importancia</span>
				</div>
			</StickyNote>
			<StickyNote title="Colabora con tu equipo">
				<div className="flex items-center space-x-2">
					<CheckCircleIcon className="h-6 w-6 text-green-500" />
					<span>Comparte y asigna tareas</span>
				</div>
			</StickyNote>
		</div>
	</section>
);
