import { useApi } from '@hooks/useApi';
import { getUserData, updateUserProfile } from '@services/api';
import { useEffect, useState } from 'react';

export const Profile = () => {
	// Fetch para obtener los datos del perfil
	const { loading, error, data, fetch: fetchUserData } = useApi(getUserData);

	// Fetch para actualizar el perfil
	const { fetch: updateProfile, loading: updating, error: updateError } = useApi(updateUserProfile);

	const [editMode, setEditMode] = useState(false);
	const [username, setUsername] = useState(data?.username || '');
	const [email, setEmail] = useState(data?.email || '');
	const [password, setPassword] = useState(data?.password || '');

	useEffect(() => {
		fetchUserData(undefined);
	}, [fetchUserData]);

	useEffect(() => {
		if (data) {
			setUsername(data.username);
			setEmail(data.email);
			setPassword(data.password);
		}
	}, [data]);

	const handleUpdateProfile = async () => {
		const updatedData = { username, email, password };
		await updateProfile(updatedData);

		setUsername(updatedData.username);
		setEmail(updatedData.email);
		setPassword(updatedData.password);

		setEditMode(false);
	};

	if (loading) return <p>Cargando...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className="max-w-md mx-auto p-6 text-black bg-white dark:bg-gray-500/25  dark:text-white shadow-lg rounded-lg ">
			<div className="text-center mb-6">
				<h1 className="text-2xl font-bold">{'Bienvenido! ' + username || 'Nombre no disponible'}</h1>
			</div>
			<div className="mb-6">
				<h2 className="text-xl text-center font-semibold mb-4">Mis datos</h2>
				{editMode ? (
					<div>
						<div className="mb-4">
							<label className="block text-sm font-medium mb-1">Nombre de usuario:</label>
							<input
								type="text"
								onChange={(e) => setUsername(e.target.value)}
								className="w-full p-2 border rounded-lg text-black"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium mb-1">Email:</label>
							<input
								type="email"
								onChange={(e) => setEmail(e.target.value)}
								className="w-full p-2 border rounded-lg text-black"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium mb-1">Contraseña:</label>
							<input
								type="password"
								onChange={(e) => setPassword(e.target.value)}
								className="w-full p-2 border rounded-lg text-black"
							/>
						</div>
						<button onClick={handleUpdateProfile} className="btn-secondary-blue mt-4" disabled={updating}>
							{updating ? 'Guardando...' : 'Guardar cambios'}
						</button>
						<button onClick={() => setEditMode(false)} className="btn-secondary-blue mt-4 ml-2">
							Cancelar
						</button>
					</div>
				) : (
					<div>
						<p>
							<strong>Email:</strong> {email || 'Correo no disponible'}
						</p>
						<div className="flex justify-center mt-6">
							<button onClick={() => setEditMode(true)} className="btn-secondary-blue">
								Modificar
							</button>
						</div>
					</div>
				)}
			</div>
			{updateError && <p className="text-red-500">Error al actualizar: {updateError.message}</p>}
		</div>
	);
};
