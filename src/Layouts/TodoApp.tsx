import { CustomDrawer } from '@components/Drawer/CustomDrawer';

interface Props {
	children: React.ReactNode;
}

export const TodoApp: React.FC<Props> = ({ children }) => {
	return (
		<div className="min-h-screen min-w-screen">
			<CustomDrawer />
			<main className="container mx-auto">{children}</main>
		</div>
	);
};
