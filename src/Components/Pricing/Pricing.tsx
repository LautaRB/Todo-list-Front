import { StickyNote } from '@components/utils/StickyNote';

export const Pricing = () => (
	<section id="pricing" className="section-container">
		<h2 className="subtitle">Planes</h2>
		<div className="grid md:grid-cols-3 gap-8">
			<StickyNote title="Básico" color="yellow">
				<p className="mb-4">Desde $9.99/mes</p>
				<button className="btn-blue">Elegir plan</button>
			</StickyNote>
			<StickyNote title="Pro" color="green">
				<p className="mb-4">Desde $19.99/mes</p>
				<button className="btn-green">Elegir plan</button>
			</StickyNote>
			<StickyNote title="Empresas" color="yellow">
				<p className="mb-4">Desde $49.99/mes</p>
				<button className="btn-blue">Elegir plan</button>
			</StickyNote>
		</div>
	</section>
);
