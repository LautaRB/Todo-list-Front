import { StickyNote } from '@components/utils/StickyNote';

const features = [
	{
		title: 'Organiza tus tareas',
		description: 'Crea listas personalizadas',
		color: 'yellow',
	},
	{
		title: 'Establece prioridades',
		description: 'Ordena por importancia',
		color: 'green',
	},
	{
		title: 'Colabora con tu equipo',
		description: 'Comparte y asigna tareas',
		color: 'pink',
	},
];

export const Features = () => (
	<section id="features" className="section-container">
		<h2 className="subtitle">Características</h2>
		<div className="grid md:grid-cols-3 gap-8">
			{features.map((feature) => (
				<StickyNote key={feature.title} title={feature.title} color={feature.color} animation>
					<div className="flex items-center space-x-2">
						<span>{feature.description}</span>
					</div>
				</StickyNote>
			))}
		</div>
	</section>
);
