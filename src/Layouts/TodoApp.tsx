import { CustomDrawer } from '@components/Sidebar/Drawer/CustomDrawer';
import { CustomSidebar } from '@components/Sidebar/CustomSidebar';

interface Props {
	children: React.ReactNode;
}

export const TodoApp: React.FC<Props> = ({ children }) => {
	return (
		<div className="min-h-screen min-w-screen bg-white dark:bg-gray-800">
			<CustomDrawer />
			<CustomSidebar />
			<main className="container mx-auto">{children}</main>
		</div>
	);
};
