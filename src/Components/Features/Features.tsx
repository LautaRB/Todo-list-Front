import { StickyNote } from '@components/utils/StickyNote';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export const Features = () => (
	<section id="features" className="section-container">
		<h2 className="subtitle">Características</h2>
		<div className="grid md:grid-cols-3 gap-8">
			<StickyNote title="Organiza tus tareas" color="yellow" animation={true}>
				<div className="flex items-center space-x-2">
					<CheckCircleIcon className="h-6 w-6 text-green-500" />
					<span>Crea listas personalizadas</span>
				</div>
			</StickyNote>
			<StickyNote title="Establece prioridades" color="green" animation={true}>
				<div className="flex items-center space-x-2">
					<CheckCircleIcon className="h-6 w-6 text-green-500" />
					<span>Ordena por importancia</span>
				</div>
			</StickyNote>
			<StickyNote title="Colabora con tu equipo" color="pink" animation={true}>
				<div className="flex items-center space-x-2">
					<CheckCircleIcon className="h-6 w-6 text-green-500" />
					<span>Comparte y asigna tareas</span>
				</div>
			</StickyNote>
		</div>
	</section>
);
