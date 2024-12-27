import { SidebarContent } from '@components/Sidebar/SidebarContent';
import { SideButton } from '@components/Sidebar/SideButton';
import { DarkThemeToggle, Drawer, Sidebar } from 'flowbite-react';
import { useState } from 'react';
import { FcTodoList } from 'react-icons/fc';
import Hamburger from 'hamburger-react';
import { VscGithubAlt } from 'react-icons/vsc';
import { HiOutlineLogout } from 'react-icons/hi';

export const CustomDrawer = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => setIsOpen(false);

	return (
		<header className="block lg:hidden sticky top-0">
			<div className="w-screen bg-zinc-50 dark:bg-zinc-700 shadow-lg">
				<nav className="flex w-mobile m-auto bg-zinc-50 items-center justify-between dark:bg-zinc-700">
					<Hamburger color="currentColor" size={24} toggled={isOpen} toggle={setIsOpen} />
					<div className="flex items-center gap-3">
						<SideButton ariaLabel="Repositorio" icon={VscGithubAlt} />
						<DarkThemeToggle className="icon-btn" />
					</div>
				</nav>
			</div>

			<Drawer
				open={isOpen}
				onClose={handleClose}
				className="container absolute bg-zinc-50 w-64 overflow-hidden shadow-lg dark:bg-zinc-700"
			>
				<Drawer.Header title="Todografo" titleIcon={FcTodoList} onClick={() => setIsOpen(!isOpen)} className="ml-2" />
				<Drawer.Items>
					<Sidebar aria-label="Sidebar de navegación" className="[&>div]:bg-transparent [&>div]:p-0 w-56">
						<Sidebar.Items>
							<SidebarContent />
							<hr className="mt-5 border-zinc-300 dark:border-zinc-500" />
							<Sidebar.ItemGroup className="my-0">
								<Sidebar.Item href="/app/profile" icon={HiOutlineLogout}>
									Cerrar Sesión
								</Sidebar.Item>
							</Sidebar.ItemGroup>
						</Sidebar.Items>
					</Sidebar>
				</Drawer.Items>
			</Drawer>
		</header>
	);
};
