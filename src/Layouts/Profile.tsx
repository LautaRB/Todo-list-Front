import { CustomDrawer } from '@components/Sidebar/Drawer/CustomDrawer';
import { CustomSidebar } from '@components/Sidebar/CustomSidebar';

interface Props {
	children: React.ReactNode;
}

export const Profile: React.FC<Props> = ({ children }) => {
	return (
		<div className="min-h-screen min-w-screen bg-gray-400 dark:bg-green-500">
			<CustomDrawer />
			<CustomSidebar />
			<main className="container mx-auto">{children}</main>
		</div>
	);
};
