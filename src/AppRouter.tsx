import { RoutesWithNotFound } from '@components/RoutesWithNotFound';
import { Route, BrowserRouter } from 'react-router-dom';
import { Landing as LandingLayout } from '@layouts/Landing';
import { Landing as LandingPage } from '@pages/Public/Landing';
import { SignIn as SignInPage } from '@pages/Public/SignIn';
import { SignUp as SignUpPage } from '@pages/Public/SignUp';
import { Sign as SignLayout } from '@layouts/Sign';
import { PrivateGuard } from './Guard/PrivateGuard';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<RoutesWithNotFound>
				<Route
					index
					element={
						<LandingLayout>
							<LandingPage />
						</LandingLayout>
					}
				/>
				<Route
					path="/signIn"
					element={
						<SignLayout signIn>
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
				<Route element={<PrivateGuard />}>
					<Route path="/app" element={<h1>Private</h1>} />
				</Route>
			</RoutesWithNotFound>
		</BrowserRouter>
	);
};
