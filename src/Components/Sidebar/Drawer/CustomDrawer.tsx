import { SidebarContent } from '@components/Sidebar/SidebarContent';
import { Button, Drawer, Sidebar } from 'flowbite-react';
import { useState } from 'react';
import { FcTodoList } from 'react-icons/fc';

export const CustomDrawer = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => setIsOpen(false);

	return (
		<div className="block lg:hidden">
			<div className="flex min-h-[50vh] items-center justify-center">
				<Button onClick={() => setIsOpen(true)}>Show navigation</Button>
			</div>
			<Drawer open={isOpen} onClose={handleClose} className="container">
				<Drawer.Header title="Todografo" titleIcon={FcTodoList} onClick={() => setIsOpen(!isOpen)} />
				<Drawer.Items>
					<Sidebar aria-label="Sidebar de navegación" className="[&>div]:bg-transparent [&>div]:p-0 ">
						<Sidebar.Items>
							<SidebarContent />
						</Sidebar.Items>
					</Sidebar>
				</Drawer.Items>
			</Drawer>
		</div>
	);
};
