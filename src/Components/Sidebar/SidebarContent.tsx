import { Sidebar } from 'flowbite-react';
import { HiOutlineChartPie, HiOutlinePencilAlt, HiOutlineUser, HiOutlineFolderOpen } from 'react-icons/hi';

export const SidebarContent = () => {
	return (
		<>
			<Sidebar.ItemGroup>
				<Sidebar.Item href="/app" icon={HiOutlineChartPie}>
					Dashboard
				</Sidebar.Item>
				<Sidebar.Item href="/app/tasks" icon={HiOutlinePencilAlt}>
					Mis tareas
				</Sidebar.Item>
				<Sidebar.Item href="/app/projects" icon={HiOutlineFolderOpen}>
					Mis Proyectos
				</Sidebar.Item>
				<Sidebar.Item href="/app/profile" icon={HiOutlineUser}>
					Mi perfil
				</Sidebar.Item>
			</Sidebar.ItemGroup>
		</>
	);
};
