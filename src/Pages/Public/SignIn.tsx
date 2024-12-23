import { Input } from '@components/Form/Input';
import { FormContainer } from '@components/Form/FormContainer';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signInSchema, FormSignInData } from '@schemas/signForm';
import { useApi } from '@hooks/useApi';
import { loginUser } from '@services/api';

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

	const { loading, error, data, fetch } = useApi(loginUser);

	const onSubmit: SubmitHandler<FormSignInData> = (data) => {
		const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.identifier);
		const apiData = isEmail
			? { email: data.identifier, password: data.password }
			: { username: data.identifier, password: data.password };

		fetch(apiData);
	};

	return (
		<div className="grid place-items-center h-screen">
			<FormContainer title="Inicio de Sesión">
				<form onSubmit={handleSubmit(onSubmit)} className="form">
					<Input
						name="identifier"
						type="identifier"
						placeholder="Nombre de Usuario o Email"
						control={control}
						error={errors.identifier}
					/>
					<Input name="password" type="password" placeholder="Contraseña" control={control} error={errors.password} />
					<button type="submit" className={`btn-secondary-blue ${loading ? 'cursor-not-allowed' : ''}`}>
						{loading ? 'Cargando...' : 'Iniciar Sesión'}
					</button>
				</form>
				<p className="text-sm text-gray-500">
					¿No tienes una cuenta?{' '}
					<a href="/signUp" className="link-blue">
						Regístrate
					</a>
				</p>
				{/* TESTING */}
				{error && <p className="text-sm text-red-500">{error.message}</p>}
				{data && <p className="text-sm text-green-500">Sesión iniciada con éxito</p>}
			</FormContainer>
		</div>
	);
};
