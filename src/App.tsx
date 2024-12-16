import { Routes, Route } from 'react-router-dom';
import { BaseLayout } from '@layouts/BaseLayout';
import { ErrorLayout } from '@layouts/ErrorLayout';
import { LandingPage } from '@pages/LandingPage';
import { ErrorPage } from '@pages/ErrorPage';

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
		</Routes>
	);
};
