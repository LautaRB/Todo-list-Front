export const Profile = () => {
	return (
		<div className="max-w-md mx-auto p-6 bg-gray-600 dark:bg-green-200 shadow-lg rounded-lg">
			<div className="text-center mb-6">
				<h1 className="text-2xl font-bold text-gray-800">Username</h1>
			</div>
			<div className="mb-6">
				<h2 className="text-xl font-semibold text-gray-700 mb-4">Mis datos</h2>
				<p className="text-gray-600">
					<strong className="text-gray-800">Email:</strong> johndoe@example.com
				</p>
				<p className="mb-6 text-gray-600">
					<strong className="text-gray-800">Password:</strong> ********
				</p>
                <a href="#" className="btn-black absolute top-[130px] right-[525px]">
					Modificar Datos
				</a>
			</div>
			<div>
				<h2 className="text-xl font-semibold text-gray-700 mb-4 mt-[50px]">Últimas Tareas / Projectos</h2>
				<ul className="space-y-2">
					<li className="text-gray-500 italic">No hay tareas aún</li>
				</ul>
			</div>
		</div>
	);
};
