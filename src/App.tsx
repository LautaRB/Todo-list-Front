import { Routes, Route } from 'react-router-dom';
import { Landing as LandingLayout } from '@layouts/Landing';
import { Landing as LandingPage } from '@pages/Landing';
import { Error as ErrorPage } from '@pages/Error';
import { SignIn as SignInPage } from '@pages/SignIn';
import { SignUp as SignUpPage } from '@pages/SignUp';
import { Sign as SignLayout } from '@layouts/Sign';
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
					<BaseLayout background="red">
						<ErrorPage />
					</BaseLayout>
				}
			/>
			<Route
				path="/signIn"
				element={
					<SignLayout signIn={true}>
						<SignInPage />
					</SignLayout>
				}
			/>
			<Route
				path="/signUp"
				element={
					<SignLayout signIn={false}>
						<SignUpPage />
					</SignLayout>
				}
			/>
		</Routes>
	);
};
