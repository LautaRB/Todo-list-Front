import { StickyNote } from '@components/utils/StickyNote';

export const HowWorksSection = () => (
	<section
		id="how-it-works"
		className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8"
	>
		<h2 className="text-3xl font-bold mb-8 text-center font-heading">
			Cómo funciona
		</h2>
		<div className="grid md:grid-cols-2 gap-8">
			<StickyNote title="Paso 1">
				<p>Regístrate en Todografo</p>
			</StickyNote>
			<StickyNote title="Paso 2" color="yellow">
				<p>Crea tus listas de tareas</p>
			</StickyNote>
			<StickyNote title="Paso 3" color="yellow">
				<p>Organiza y prioriza tus actividades</p>
			</StickyNote>
			<StickyNote title="Paso 4">
				<p>¡Aumenta tu productividad!</p>
			</StickyNote>
		</div>
	</section>
);
