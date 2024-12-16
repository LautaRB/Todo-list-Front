export const ErrorPage = () => {
	return (
		<div className="grid place-items-center h-screen w-11/12 m-auto lg:w-5/6">
			<section className="section-container flex flex-col items-center justify-center h-42 space-y-8">
				<h1 className="text-4xl font-bold font-heading text-red-500 text-center">
					Página no encontrada [404]
				</h1>
				<a href="/" className="btn-red font-handwritten">
					Volver al inicio
				</a>
			</section>
		</div>
	);
};
