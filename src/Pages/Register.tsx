import { StickyNote } from '@components/utils/StickyNote';
import { Form } from '@components/Form/Form';

export const Register = () => {
	return (
		<div className="grid place-items-center h-screen w-11/12 m-auto lg:w-5/6">
			<section className="section-container flex flex-col items-center justify-center h-70">
				<StickyNote color="yellow">
					<Form title="Registro" buttonText="Registrarse">
						<input type="text" placeholder="Nombre de Usuario" required />
						<input type="password" placeholder="Contraseña" required />
						<input type="text" placeholder="Email" required />
					</Form>
				</StickyNote>
			</section>
		</div>
	);
};
