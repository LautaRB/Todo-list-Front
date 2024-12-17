import { Input } from '@components/Form/Input';
import { FormContainer } from '@components/Form/FormContainer';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signUpSchema, SignFormData } from '@schemas/signForm';

export const Register = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignFormData>({
		resolver: zodResolver(signUpSchema),
		mode: 'onBlur',
	});

	const onSubmit: SubmitHandler<SignFormData> = (data) => {
		console.log(data);
	};

	return (
		<div className="grid place-items-center h-screen w-11/12 m-auto lg:w-5/6">
			<FormContainer title="Registro">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col items-center justify-center gap-7"
				>
					<div className="flex flex-col gap-2">
						<Input
							name="name"
							type="text"
							placeholder="Nombre"
							control={control}
							error={errors.name}
						/>
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
						<Input
							name="confirmPassword"
							type="password"
							placeholder="Confirmar contraseña"
							control={control}
							error={errors.confirmPassword}
						/>
						<button type="submit" className="btn-green">
							Registrarse
						</button>
					</div>
				</form>
				<a href="/login" className="block text-sm text-gray-500 link-blue">
					¿Ya tienes una cuenta?
				</a>
			</FormContainer>
		</div>
	);
};
