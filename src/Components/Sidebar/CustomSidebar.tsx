import { DarkThemeToggle, Sidebar } from 'flowbite-react';
import { SidebarContent } from './SidebarContent';
import { FcTodoList } from 'react-icons/fc';
import { VscGithubAlt } from 'react-icons/vsc';
import { HiOutlineLogout } from 'react-icons/hi';
import { SideButton } from './SideButton';

export const CustomSidebar = () => {
	return (
		<Sidebar className="fixed top-0 left-0 h-screen w-56 bg-zinc-50 dark:bg-zinc-700 shadow-lg border-r border-zinc-200 dark:border-zinc-600 hidden lg:block">
			<a href="/" className="flex gap-3 items-center mb-5 w-fit pl-2 text-base">
				<FcTodoList />
				Todografo
			</a>
			<Sidebar.Items>
				<SidebarContent />
				<div className="absolute bottom-2 right-2 flex items-center">
					<SideButton ariaLabel="Repositorio" icon={VscGithubAlt} />
					<DarkThemeToggle className="icon-btn" />
					<SideButton ariaLabel="Cerrar sesión" icon={HiOutlineLogout} />
				</div>
			</Sidebar.Items>
		</Sidebar>
	);
};
