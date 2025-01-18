import { useApi } from '@hooks/useApi';
import { getUserData } from '@services/api';
import { useEffect } from 'react';

export const Profile = () => {
    const { loading, error, data, fetch } = useApi(getUserData);

    useEffect(() => {
        fetch(undefined);
    }, [fetch]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-600 dark:bg-green-200 shadow-lg rounded-lg">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    {'Bienvenido! ' + data?.username || 'Nombre no disponible'}
                </h1>
            </div>
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Mis datos</h2>
                <p className="text-gray-600">
                    <strong className="text-gray-800">Email:</strong> {data?.email || 'Correo no disponible'}
                </p>
            </div>
        </div>
    );
};
