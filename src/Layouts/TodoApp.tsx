import { CustomDrawer } from '@components/Drawer/CustomDrawer';
import { Footer } from '@components/Footer/Footer';

interface Props {
	children: React.ReactNode;
}

export const TodoApp: React.FC<Props> = ({ children }) => {
	return (
		<div className="min-h-screen min-w-screen">
			<CustomDrawer />
			<main className="container mx-auto">
				<div className="background-blue fixed inset-0 -z-10"></div>
				{children}
			</main>
			<Footer />
		</div>
	);
};
