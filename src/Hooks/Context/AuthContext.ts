import { createContext, useContext } from 'react';

interface AuthContextType {
	isAuthenticated: boolean | null;
	setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export const AuthContext = createContext<AuthContextType>({
	isAuthenticated: null,
	setIsAuthenticated: () => {},
});

export const useAuthContext = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuthContext must be used within an AuthProvider');
	}

	return context;
};
