import { Sidebar } from 'flowbite-react';
import { HiOutlineChartPie, HiOutlinePencilAlt, HiOutlineUser } from 'react-icons/hi';
import { useApi } from '@hooks/useApi';
import { getUserData } from '@services/api';
import { useEffect, useState } from 'react';

export const SidebarContent = () => {
	const { data, fetch } = useApi(getUserData);
	const [role, setRole] = useState<string | undefined>(undefined);

	useEffect(() => {
		fetch(undefined);
	}, [fetch]);

	useEffect(() => {
		if (data) {
			setRole(data.role);
		}
	}, [data]);

	const commonItems = (
		<>
			<Sidebar.Item href="/app/tasks" icon={HiOutlinePencilAlt}>
				Mis tareas
			</Sidebar.Item>
			<Sidebar.Item href="/app/profile" icon={HiOutlineUser}>
				Mi perfil
			</Sidebar.Item>
		</>
	);

	const adminItems = (
		<>
			<Sidebar.Item href="/app/admin" icon={HiOutlineChartPie}>
				Usuarios
			</Sidebar.Item>
			{commonItems}
		</>
	);

	return <Sidebar.ItemGroup>{role === 'admin' ? adminItems : commonItems}</Sidebar.ItemGroup>;
};