import { RoutesWithNotFound } from '@components/RoutesWithNotFound';
import { Route, BrowserRouter } from 'react-router-dom';
import { Landing as LandingLayout } from '@layouts/Landing';
import { Landing as LandingPage } from '@pages/Public/Landing';
import { SignIn as SignInPage } from '@pages/Public/SignIn';
import { SignUp as SignUpPage } from '@pages/Public/SignUp';
import { Sign as SignLayout } from '@layouts/Sign';
import { TodoApp as TodoAppLayout } from '@layouts/TodoApp';
import { TodoApp as TodoAppPage } from '@pages/Private/TodoApp';
import { Profile as ProfilePage } from '@pages/Private/Profile';
import { Admin as AdminPage } from '@pages/Private/Admin';
import { Tasks as TasksPage } from '@pages/Private/Tasks';
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
						<SignLayout>
							<SignInPage />
						</SignLayout>
					}
				/>
				<Route
					path="/signUp"
					element={
						<SignLayout>
							<SignUpPage />
						</SignLayout>
					}
				/>
				<Route element={<PrivateGuard />}>
					<Route
						path="/app"
						element={
							<TodoAppLayout>
								<TodoAppPage />
							</TodoAppLayout>
						}
					/>
					<Route
						path="/app/tasks"
						element={
							<TodoAppLayout>
								<TasksPage />
							</TodoAppLayout>
						}
					/>
					<Route
						path="/app/profile"
						element={
							<TodoAppLayout>
								<ProfilePage />
							</TodoAppLayout>
						}
					/>
				</Route>
				<Route
					path="/app/admin"
					element={
						<TodoAppLayout>
							<AdminPage />
						</TodoAppLayout>
					}
				/>
			</RoutesWithNotFound>
		</BrowserRouter>
	);
};
