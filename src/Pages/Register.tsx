import { StickyNote } from '@components/utils/StickyNote';
import { Form } from '@components/Form/Form';
import { Input } from '@components/Input/Input';

export const Register = () => {
	return (
		<div className="grid place-items-center h-screen w-11/12 m-auto lg:w-5/6">
			<section className="section-container flex flex-col items-center justify-center h-70">
				<StickyNote className="h-[222px]" color="yellow">
					<Form title="Registro" submitText="Registrarse">
						<Input type="text" placeholder="Usuario" required />
						<Input type="password" placeholder="Contraseña" required />
						<Input type="text" placeholder="Email" required />
					</Form>
					<a
						href="http://localhost:5173/login"
						className="absolute mt-4 text-center text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300"
					>
						¿Ya tienes una cuenta?
					</a>
				</StickyNote>
			</section>
		</div>
	);
};
