import { StickyNote } from '@components/utils/StickyNote';

export const HowWorks = () => (
	<section id="how-it-works" className="section-container">
		<h2 className="subtitle">Cómo funciona</h2>
		<div className="grid md:grid-cols-2 gap-8">
			<StickyNote title="Paso 1" animation={true}>
				<p>Regístrate en Todografo</p>
			</StickyNote>
			<StickyNote title="Paso 2" color="yellow" animation={true}>
				<p>Crea tus listas de tareas</p>
			</StickyNote>
			<StickyNote title="Paso 3" color="yellow" animation={true}>
				<p>Organiza y prioriza tus actividades</p>
			</StickyNote>
			<StickyNote title="Paso 4" animation={true}>
				<p>¡Aumenta tu productividad!</p>
			</StickyNote>
		</div>
	</section>
);
