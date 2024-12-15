export const Footer = () => {
	return (
		<footer className="w-full py-6 bg-yellow-200 text-center text-amber-800 z-10">
			<div className="container mx-auto px-4">
				<p className="font-bold font-handwritten">&copy; 2024 Todografo</p>
				<div className="mt-2">
					<a href="#" className="text-sm hover:underline mx-2 font-handwritten">
						Política de privacidad
					</a>
					<a href="#" className="text-sm hover:underline mx-2 font-handwritten">
						Términos de servicio
					</a>
				</div>
			</div>
		</footer>
	);
};
