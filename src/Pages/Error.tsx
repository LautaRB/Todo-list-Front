export const Error = () => {
	return (
		<div className="grid place-items-center h-screen w-mobile lg:w-desktop m-auto">
			<section className="section-container flex flex-col items-center justify-center gap-7">
				<h2 className="text-4xl font-semibold font-heading text-red-400 text-center">
					404
					<p className="text-2xl mt-3">La página que buscás no existe :(</p>
				</h2>
				<a href="/" className="btn-red font-heading text-base">
					Volver al inicio
				</a>
			</section>
		</div>
	);
};
