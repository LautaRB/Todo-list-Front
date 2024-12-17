import { StickyNote } from '@components/utils/StickyNote';
import { Form } from '@components/Form/Form';
import { Input } from '@components/Input/Input';

export const Login = () => {
	return (
		<div className="grid place-items-center h-screen w-11/12 m-auto lg:w-5/6">
			<section className="section-container flex flex-col items-center justify-center h-70">
				<StickyNote color="yellow">
					<Form title="Inicio de Sesión" submitText="Iniciar Sesión">
						<Input type="text" placeholder="Usuario o Email" required />
						<Input type="password" placeholder="Contraseña" required />
					</Form>
				</StickyNote>
			</section>
		</div>
	);
};
