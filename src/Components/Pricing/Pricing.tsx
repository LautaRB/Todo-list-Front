import { StickyNote } from '@components/utils/StickyNote';

export const Pricing = () => (
	<section
		id="pricing"
		className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8"
	>
		<h2 className="text-3xl font-bold mb-6 text-center font-heading">Planes</h2>
		<div className="grid md:grid-cols-3 gap-8">
			<StickyNote title="Básico">
				<p className="mb-4">Desde $9.99/mes</p>
				<button className="btn-primary">Elegir plan</button>
			</StickyNote>
			<StickyNote title="Pro" color="yellow">
				<p className="mb-4">Desde $19.99/mes</p>
				<button className="btn-primary">Elegir plan</button>
			</StickyNote>
			<StickyNote title="Empresas" color="yellow">
				<p className="mb-4">Desde $49.99/mes</p>
				<button className="btn-primary">Elegir plan</button>
			</StickyNote>
		</div>
	</section>
);
