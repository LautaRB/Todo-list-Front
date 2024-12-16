import { Routes, Route } from 'react-router-dom';
import { Base as BaseLayout } from '@layouts/Landing';
import { Error as ErrorLayout } from '@layouts/Error';
import { Landing as LandingPage } from '@pages/Landing';
import { Error as ErrorPage } from '@pages/Error';
import { Login as LoginLayout } from '@layouts/Login';
import { Login as LoginPage } from '@pages/Login';

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
		</Routes>
	);
};
