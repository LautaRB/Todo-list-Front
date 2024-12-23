import { Input } from '@components/Form/Input';
import { FormContainer } from '@components/Form/FormContainer';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signInSchema, SignInData } from '@schemas/signForm';
import { useApi } from '@hooks/useApi';
import { loginUser } from '@services/api';

export const SignIn = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInData>({
		resolver: zodResolver(signInSchema),
		mode: 'onBlur',
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const { loading, error, data, fetch } = useApi(loginUser);

	const onSubmit: SubmitHandler<SignInData> = (data) => {
		fetch(data);
	};

	return (
		<div className="grid place-items-center h-screen">
			<FormContainer title="Inicio de Sesión">
				<form onSubmit={handleSubmit(onSubmit)} className="form">
					<Input name="email" type="email" placeholder="Email" control={control} error={errors.email} />
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
