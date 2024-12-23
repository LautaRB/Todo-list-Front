import { StickyNote } from '@components/utils/StickyNote';

const steps = [
	{
		title: 'Paso 1',
		description: 'Regístrate en Todografo',
		color: 'yellow',
	},
	{
		title: 'Paso 2',
		description: 'Crea tus listas de tareas',
		color: 'yellow',
	},
	{
		title: 'Paso 3',
		description: 'Organiza y prioriza tus actividades',
		color: 'yellow',
	},
	{
		title: 'Paso 4',
		description: '¡Aumenta tu productividad!',
		color: 'yellow',
	},
];

export const HowWorks = () => (
	<section id="how-it-works" className="section-container">
		<h2 className="subtitle">Cómo funciona</h2>
		<div className="grid md:grid-cols-2 gap-8">
			{steps.map((step) => (
				<StickyNote key={step.title} title={step.title} color={step.color} animation>
					<span>{step.description}</span>
				</StickyNote>
			))}
		</div>
	</section>
);
