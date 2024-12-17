import { z } from 'zod';

export const signUpSchema = z
	.object({
		name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
		email: z.string().email('El email no es valido'),
		password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
		confirmPassword: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Las contraseñas no coinciden',
		path: ['confirmPassword'],
	});

export const signInSchema = z.object({
	email: z.string().email('El email no es valido'),
	password: z.string(),
});

export type SignUpData = z.infer<typeof signUpSchema>;
export type SignInData = z.infer<typeof signInSchema>;
