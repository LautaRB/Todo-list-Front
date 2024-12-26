import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '@hooks/Context/AuthContext';

export const PrivateGuard = () => {
	const { isAuthenticated } = useAuthContext();
	const location = useLocation();

	if (isAuthenticated === null) {
		return null;
	}

	return isAuthenticated ? <Outlet /> : <Navigate to="/signIn" state={{ from: location }} replace />;
	// return <Outlet />;
};
