import { Routes, Route } from 'react-router-dom';
import { Base as BaseLayout } from '@layouts/Landing';
import { Error as ErrorLayout } from '@layouts/Error';
import { Landing as LandingPage } from '@pages/Landing';
import { Error as ErrorPage } from '@pages/Error';
import { Login as LoginLayout } from '@layouts/Login';
import { Login as LoginPage } from '@pages/Login';
import { Register as RegisterLayout } from '@layouts/Register';
import { Register as RegisterPage } from '@pages/Register';

export const App = () => {
	return (
		<Routes>
			<Route
				index
				element={
					<BaseLayout>
						<LandingPage />
					</BaseLayout>
				}
			/>
			<Route
				path="*"
				element={
					<ErrorLayout>
						<ErrorPage />
					</ErrorLayout>
				}
			/>
			<Route
				path="/login"
				element={
					<LoginLayout>
						<LoginPage />
					</LoginLayout>
				}
			/>
			<Route
				path="/register"
				element={
					<RegisterLayout>
						<RegisterPage />
					</RegisterLayout>
				}
			/>
		</Routes>
	);
};
