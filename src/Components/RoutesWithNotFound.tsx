import { Navigate, Route, Routes } from 'react-router-dom';
import { Base as BaseLayout } from '@layouts/Base';
import { Error as ErrorPage } from '@pages/Public/Error';

interface Props {
	children: React.ReactNode;
}

export const RoutesWithNotFound: React.FC<Props> = ({ children }) => {
	return (
		<Routes>
			{children}
			<Route path="*" element={<Navigate to="/404" replace />} />
			<Route
				path="/404"
				element={
					<BaseLayout background="red">
						<ErrorPage />
					</BaseLayout>
				}
			/>
		</Routes>
	);
};
