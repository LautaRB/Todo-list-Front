import { Input } from '@components/Form/Input';
import { FormContainer } from '@components/Form/FormContainer';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signInSchema, FormSignInData } from '@schemas/signForm';
import { useApi } from '@hooks/useApi';
import { loginUser } from '@services/api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@hooks/Context/AuthContext';

export const SignIn = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSignInData>({
		resolver: zodResolver(signInSchema),
		mode: 'onBlur',
		defaultValues: {
			identifier: '',
			password: '',
		},
	});

	const navigate = useNavigate();

	const { loading, error, data, fetch } = useApi(loginUser);
	const { setIsAuthenticated } = useAuthContext();

	const onSubmit: SubmitHandler<FormSignInData> = (data) => {
		const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.identifier);
		const apiData = isEmail
			? { email: data.identifier, password: data.password }
			: { username: data.identifier, password: data.password };

		fetch(apiData);
	};

	useEffect(() => {
		if (data) {
			setIsAuthenticated(true);
			navigate('/app');
		}
	}, [data, navigate, setIsAuthenticated]);

	return (
		<div className="grid place-items-center h-screen">
			<FormContainer title="Inicio de Sesión">
				<form onSubmit={handleSubmit(onSubmit)} className="form">
					<Input
						name="identifier"
						type="text"
						placeholder="Usuario o Email"
						control={control}
						error={errors.identifier}
					/>
					<Input name="password" type="password" placeholder="Contraseña" control={control} error={errors.password} />
					<button
						type="submit"
						className={`btn-secondary-blue text-zinc-50 dark:btn-secondary-yellow ${
							loading ? 'cursor-not-allowed' : ''
						}`}
					>
						{loading ? 'Cargando...' : 'Iniciar Sesión'}
					</button>
				</form>
				<p className="text-sm text-zinc-600 dark:text-zinc-300">
					¿No tienes una cuenta?{' '}
					<a href="/signUp" className="link-blue dark:link-yellow">
						Regístrate
					</a>
				</p>
				{error && <p className="text-sm text-red-500 dark:text-red-300">{error.message}</p>}
			</FormContainer>
		</div>
	);
};
