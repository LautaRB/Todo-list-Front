import { StickyNote } from '@components/utils/StickyNote';

export const Pricing = () => (
	<section id="pricing" className="section-container">
		<h2 className="subtitle">Planes</h2>
		<div className="grid md:grid-cols-3 gap-8">
			<StickyNote title="Básico" color="blue">
				<p className="mb-4">Desde $9.99/mes</p>
				<button className="btn-green">Elegir plan</button>
			</StickyNote>
			<StickyNote title="Pro" color="blue">
				<p className="mb-4">Desde $19.99/mes</p>
				<button className="btn-green">Elegir plan</button>
			</StickyNote>
			<StickyNote title="Empresas" color="blue">
				<p className="mb-4">Desde $49.99/mes</p>
				<button className="btn-green">Elegir plan</button>
			</StickyNote>
		</div>
	</section>
);
