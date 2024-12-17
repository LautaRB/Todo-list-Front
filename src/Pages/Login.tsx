import { Input } from '@components/Form/Input';
import { FormContainer } from '@components/Form/FormContainer';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signInSchema, SignInData } from '@schemas/signForm';

export const Login = () => {
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

	const onSubmit: SubmitHandler<SignInData> = (data) => {
		console.log(data);
	};

	return (
		<div className="grid place-items-center h-screen w-11/12 m-auto lg:w-5/6">
			<FormContainer title="Inicio de Sesión">
				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
					<Input
						name="email"
						type="email"
						placeholder="Email"
						control={control}
						error={errors.email}
					/>
					<Input
						name="password"
						type="password"
						placeholder="Contraseña"
						control={control}
						error={errors.password}
					/>
					<button type="submit" className="btn-green">
						Iniciar Sesión
					</button>
				</form>
				<a href="/register" className="block text-sm text-gray-500 link-blue">
					¿No tienes una cuenta?
				</a>
			</FormContainer>
		</div>
	);
};
