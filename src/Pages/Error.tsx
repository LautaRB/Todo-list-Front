import { StickyNote } from '@components/utils/StickyNote';

export const Error = () => {
	return (
		<div className="grid place-items-center h-screen w-[97%] m-auto lg:w-5/6">
			<section className="section-container flex flex-col items-center justify-center">
				<StickyNote color="yellow">
					<div className="flex flex-col items-center justify-center gap-7">
						<h1 className="text-5xl font-bold font-heading text-red-400 text-center">
							404
							<p className="text-3xl mt-3">La página que buscás no existe :(</p>
						</h1>
						<a href="/" className="btn-red font-handwritten">
							Volver al inicio
						</a>
					</div>
				</StickyNote>
			</section>
		</div>
	);
};
