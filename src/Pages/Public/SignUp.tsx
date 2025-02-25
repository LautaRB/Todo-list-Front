import { Input } from '@components/Form/Input';
import { FormContainer } from '@components/Form/FormContainer';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signUpSchema, FormSignUpData } from '@schemas/signForm';
import { useApi } from '@hooks/useApi';
import { registerUser } from '@services/api';
import { useAuthContext } from '@hooks/Context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSignUpData>({
		resolver: zodResolver(signUpSchema),
		mode: 'onBlur',
		defaultValues: {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	});
	const navigate = useNavigate();

	const { loading, error, data, fetch } = useApi(registerUser);
	const { setIsAuthenticated } = useAuthContext();

	const onSubmit: SubmitHandler<FormSignUpData> = (data) => {
		fetch(data);
	};

	useEffect(() => {
		if (data) {
			setIsAuthenticated(true);
			navigate('/app');
		}
	}, [data, navigate, setIsAuthenticated]);

	return (
		<div className="grid place-items-center h-screen">
			<FormContainer title="Registro">
				<form onSubmit={handleSubmit(onSubmit)} className="form">
					<Input name="username" type="text" placeholder="Nombre" control={control} error={errors.username} />
					<Input name="email" type="email" placeholder="Email" control={control} error={errors.email} />
					<Input
						name="password"
						type="password"
						placeholder="Contraseña: 6-64 caracteres"
						control={control}
						error={errors.password}
					/>
					<Input
						name="confirmPassword"
						type="password"
						placeholder="Confirmar contraseña"
						control={control}
						error={errors.confirmPassword}
					/>
					<button
						type="submit"
						className={`btn-secondary-blue text-zinc-50 dark:btn-secondary-yellow ${
							loading ? 'cursor-not-allowed' : ''
						}`}
					>
						{loading ? 'Cargando...' : 'Registrarse'}
					</button>
				</form>
				<p className="text-sm text-zinc-600 dark:text-zinc-300">
					¿Tienes una cuenta?{' '}
					<a href="/signIn" className="link-blue dark:link-yellow">
						Inicia sesión
					</a>
				</p>
				{error && <p className="text-sm text-red-500 dark:text-red-300">{error.message}</p>}
			</FormContainer>
		</div>
	);
};
