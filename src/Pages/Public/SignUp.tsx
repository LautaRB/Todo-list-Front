import { Input } from '@components/Form/Input';
import { FormContainer } from '@components/Form/FormContainer';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signUpSchema, FormSignUpData } from '@schemas/signForm';

export const SignUp = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSignUpData>({
		resolver: zodResolver(signUpSchema),
		mode: 'onBlur',
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	const onSubmit: SubmitHandler<FormSignUpData> = (data) => {
		console.log(data);
	};

	return (
		<div className="grid place-items-center h-screen">
			<FormContainer title="Registro">
				<form onSubmit={handleSubmit(onSubmit)} className="form">
					<Input name="name" type="text" placeholder="Nombre" control={control} error={errors.name} />
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
					<button type="submit" className="btn-secondary-yellow">
						Registrarse
					</button>
				</form>
				<p className="text-sm text-gray-500">
					¿Tienes una cuenta?{' '}
					<a href="/signIn" className="link-blue">
						Inicia sesión
					</a>
				</p>
			</FormContainer>
		</div>
	);
};
