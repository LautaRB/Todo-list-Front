import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '@hooks/Context/AuthContext';

export const PrivateGuard = () => {
	const { isAuthenticated } = useAuthContext();
	const location = useLocation();

	if (isAuthenticated === null) {
		// Mientras se verifica la autenticación.
		return <div>Cargando...</div>;
	}

	return isAuthenticated ? <Outlet /> : <Navigate to="/signIn" state={{ from: location }} replace />;
};
