import { DarkThemeToggle, Sidebar } from 'flowbite-react';
import { SidebarContent } from './SidebarContent';
import { FcTodoList } from 'react-icons/fc';
import { VscGithubAlt } from 'react-icons/vsc';
import { HiOutlineLogout } from 'react-icons/hi';
import { SideButton } from './SideButton';
import { useApi } from '@hooks/useApi';
import { logoutUser } from '@services/api';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@hooks/Context/AuthContext';
import { useState } from 'react';

export const CustomSidebar = () => {
    const { fetch } = useApi(logoutUser);
    const { setIsAuthenticated } = useAuthContext();
    const navigate = useNavigate();
    const [logoutError, setLogoutError] = useState<string | null>(null);

    const handleLogout = async () => {
        try {
            await fetch(undefined);
            console.log("Sesión cerrada correctamente.");
            setIsAuthenticated(false);
            setLogoutError(null);
            navigate('/signIn');
        } catch (err) {
            console.error("Error al cerrar sesión:", err || "Error desconocido");
            setLogoutError("Error al cerrar sesión. Inténtalo de nuevo.");
        }
    };

    const handleExternalRedirect = () => {
        window.location.href = 'https://github.com/LautaRB/Todo-list-Front';
    };

    return (
        <Sidebar className="relative top-0 left-0 h-screen w-56 bg-zinc-50 dark:bg-zinc-700 shadow-lg border-r border-zinc-200 dark:border-zinc-600 hidden lg:block z-10">
            <a href="/" className="flex gap-3 items-center mb-5 w-fit pl-2 text-base">
                <FcTodoList />
                Todografo
            </a>
            <Sidebar.Items>
                <SidebarContent />
                <div className="absolute bottom-2 right-2 flex items-center">
                    <SideButton ariaLabel="Repositorio" icon={VscGithubAlt} onClick={handleExternalRedirect} />
                    <DarkThemeToggle className="icon-btn" />
                    <SideButton ariaLabel="Cerrar sesión" icon={HiOutlineLogout} onClick={handleLogout} />
                </div>
                {logoutError && <p className="text-red-500">{logoutError}</p>}
            </Sidebar.Items>
        </Sidebar>
    );
};
