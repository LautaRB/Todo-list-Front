import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import axios from 'axios';

interface Props {
	children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

	useEffect(() => {
		const validateAuth = async () => {
			try {
				await axios.post('http://localhost:3000/api/auth/validateAccessToken', {}, { withCredentials: true });
				setIsAuthenticated(true);
			} catch (err) {
				setIsAuthenticated(false);
			}
		};

		validateAuth();
	}, []);

	return (
		<AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
			{isAuthenticated === null ? <div>Cargando...</div> : children}
		</AuthContext.Provider>
	);
};
