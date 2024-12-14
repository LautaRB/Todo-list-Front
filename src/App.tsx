import { Routes, Route } from 'react-router-dom';
import { BaseLayout } from '@layouts/BaseLayout';
import { LandingPage } from '@pages/LandingPage';

export const App = () => {
	return (
		<BaseLayout>
			<Routes>
				<Route index element={<LandingPage />} />
			</Routes>
		</BaseLayout>
	);
};
