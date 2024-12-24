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
				await axios.post('https://todografo.vercel.app/api/auth/validateAccessToken', {}, { withCredentials: true });
				setIsAuthenticated(true);
			} catch (_) {
				try {
					await axios.post('https://todografo.vercel.app/api/auth/refreshAccessToken', {}, { withCredentials: true });
					setIsAuthenticated(true);
				} catch (_) {
					setIsAuthenticated(false);
				}
			}
		};

		validateAuth();
	}, []);

	return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AuthContext.Provider>;
};
