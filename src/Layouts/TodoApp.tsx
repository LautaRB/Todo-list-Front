import { CustomDrawer } from '@components/Sidebar/Drawer/CustomDrawer';
import { CustomSidebar } from '@components/Sidebar/CustomSidebar';

interface Props {
	children: React.ReactNode;
}

export const TodoApp: React.FC<Props> = ({ children }) => {
	return (
		<div className="h-screen bg-zinc-50 dark:bg-zinc-700 lg:flex">
			{/* Drawer para celulares */}
			<CustomDrawer />
			{/* Sidebar fijo en vistas de escritorio */}
			<CustomSidebar />
			{/* Contenedor principal */}
			<main className="flex-1 flex flex-col items-center mt-12">{children}</main>
		</div>
	);
};
