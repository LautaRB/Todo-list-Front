import { DarkThemeToggle, Sidebar } from 'flowbite-react';
import { SidebarContent } from './SidebarContent';
import { FcTodoList } from 'react-icons/fc';
import { VscGithubAlt } from 'react-icons/vsc';
import { HiOutlineLogout } from 'react-icons/hi';
import { FooterItem } from './FooterItem';

export const CustomSidebar = () => {
	return (
		<Sidebar className="absolute h-screen w-56 bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700 hidden lg:block">
			<a href="/" className="flex gap-3 items-center mb-2 text-black dark:text-white w-fit pl-2 text-xl">
				<FcTodoList />
				Todografo
			</a>
			<hr className="border-gray-200 dark:border-gray-700 w-full mb-3" />
			<Sidebar.Items>
				<SidebarContent />
				<footer className="absolute bottom-2 right-2 flex items-center">
					<FooterItem ariaLabel="Repositorio" icon={VscGithubAlt} />
					<DarkThemeToggle />
					<FooterItem ariaLabel="Cerrar sesión" icon={HiOutlineLogout} />
				</footer>
			</Sidebar.Items>
		</Sidebar>
	);
};
