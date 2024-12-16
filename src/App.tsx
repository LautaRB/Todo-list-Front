import { Routes, Route } from 'react-router-dom';
import { Landing as LandingLayout } from '@layouts/Landing';
import { Landing as LandingPage } from '@pages/Landing';
import { Error as ErrorPage } from '@pages/Error';
import { Login as LoginPage } from '@pages/Login';
import { Register as RegisterPage } from '@pages/Register';
import { Base as BaseLayout } from '@layouts/Base';

export const App = () => {
	return (
		<Routes>
			<Route
				index
				element={
					<LandingLayout>
						<LandingPage />
					</LandingLayout>
				}
			/>
			<Route
				path="*"
				element={
					<BaseLayout background="error">
						<ErrorPage />
					</BaseLayout>
				}
			/>
			<Route
				path="/login"
				element={
					<BaseLayout background="login">
						<LoginPage />
					</BaseLayout>
				}
			/>
			<Route
				path="/register"
				element={
					<BaseLayout background="login">
						<RegisterPage />
					</BaseLayout>
				}
			/>
		</Routes>
	);
};
