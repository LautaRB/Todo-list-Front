import { useApi } from '@hooks/useApi';
import { getUsers, deleteUser, createUser, updateUser } from '@services/api';
import { useEffect, useState } from 'react';
import { ApiUserProfileData } from '@customTypes/ApiUserProfileData';

export const Admin = () => {
	const { loading, error, data: users, fetch } = useApi(getUsers);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formData, setFormData] = useState<ApiUserProfileData>({
		_id: '',
		username: '',
		email: '',
		password: '',
		role: 'user',
		isActive: true,
	});

	useEffect(() => {
		fetch(undefined);
	}, [fetch]);

	const handleDeleteUser = async (userId: string) => {
		if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
			try {
				await deleteUser(userId);
				fetch(undefined);
			} catch (error) {
				console.error('Error al eliminar el usuario:', error);
			}
		}
	};

	const handleOpenModal = (user?: ApiUserProfileData) => {
		if (user) {
			setFormData({
				...user,
				password: user.password,
			});
		} else {
			setFormData({
				username: '',
				email: '',
				password: '',
				role: 'user',
				isActive: true,
			});
		}
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
        console.log('Datos enviados:', formData);
		try {
			if (formData._id) {
				await updateUser(formData._id, formData);
			} else {
				await createUser(formData);
			}
			fetch(undefined);
			handleCloseModal();
		} catch (error) {
			console.error('Error al guardar el usuario:', error);
		}
	};

	if (loading) return <p>Cargando usuarios...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-6">Panel de Administración</h1>
			<button
				onClick={() => handleOpenModal()}
				className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 transition-colors"
			>
				Agregar Usuario
			</button>
			<div className="overflow-x-auto">
				<table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
					<thead className="bg-gray-100 dark:bg-gray-700">
						<tr>
							<th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Nombre</th>
							<th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Email</th>
							<th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Rol</th>
							<th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Estado</th>
							<th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Acciones</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
						{users?.map((user) => (
							<tr key={user._id}>
								<td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-200">{user.username}</td>
								<td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-200">{user.email}</td>
								<td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-200">{user.role}</td>
								<td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-200">
									{user.isActive ? 'Activo' : 'Inactivo'}
								</td>
								<td className="py-3 px-4 text-sm text-gray-800 dark:text-gray-200">
									<button
										onClick={() => handleOpenModal(user)}
										className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2 hover:bg-yellow-600 transition-colors"
									>
										Modificar
									</button>
									<button
										onClick={() => handleDeleteUser(user._id || '')}
										className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-colors"
									>
										Eliminar
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
					<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
						<h2 className="text-xl font-bold mb-4">{formData._id ? 'Editar Usuario' : 'Agregar Usuario'}</h2>
						<form onSubmit={handleSubmit}>
							<div className="mb-4">
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Nombre de usuario</label>
								<input
									type="text"
									name="username"
									value={formData.username}
									onChange={handleInputChange}
									className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
									required
								/>
							</div>
							<div className="mb-4">
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
									required
								/>
							</div>
							<div className="mb-4">
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Contraseña</label>
								<input
									type="password"
									name="password"
									value={formData.password}
									onChange={handleInputChange}
									className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
									required={!formData._id}
								/>
							</div>
							<div className="mb-4">
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Rol</label>
								<select
									name="role"
									value={formData.role || 'user'}
									onChange={handleInputChange}
									className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
									required
								>
									<option value="admin">Admin</option>
									<option value="user">User</option>
								</select>
							</div>
							<div className="flex justify-end gap-2">
								<button
									type="button"
									onClick={handleCloseModal}
									className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
								>
									Cancelar
								</button>
								<button
									type="submit"
									className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
								>
									{formData._id ? 'Guardar Cambios' : 'Agregar Usuario'}
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};
