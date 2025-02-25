import { z } from 'zod';

export const signUpSchema = z
	.object({
		username: z.string().min(1, 'El nombre no puede estar vacío').min(3, 'El nombre debe tener al menos 3 caracteres'),
		email: z.string().email('El email no es valido'),
		password: z
			.string()
			.min(1, 'La contraseña no puede estar vacía')
			.min(6, 'La contraseña debe tener al menos 6 caracteres'),
		confirmPassword: z
			.string()
			.min(1, 'La contraseña no puede estar vacía')
			.min(6, 'La contraseña debe tener al menos 6 caracteres'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Las contraseñas no coinciden',
		path: ['confirmPassword'],
	});

export const signInSchema = z.object({
	identifier: z.string().min(1, 'Debes ingresar un nombre de Usuario o Email'),
	password: z.string(),
});

export type FormSignUpData = z.infer<typeof signUpSchema>;
export type FormSignInData = z.infer<typeof signInSchema>;
