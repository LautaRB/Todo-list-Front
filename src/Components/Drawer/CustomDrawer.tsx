import { Button, Drawer, Sidebar, TextInput } from 'flowbite-react';
import { useState } from 'react';
import {
	HiChartPie,
	HiClipboard,
	HiCollection,
	HiInformationCircle,
	HiLogin,
	HiLogout,
	HiPencil,
	HiSearch,
	HiShoppingBag,
	HiUsers,
} from 'react-icons/hi';

export const CustomDrawer = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => setIsOpen(false);

	return (
		<>
			<div className="flex min-h-[50vh] top-0 left-0 ml-4 mt-4">
				<Button className="bg-gray-800 text-white hover:bg-gray-700 h-[60px] w-[60px]" onClick={() => setIsOpen(true)}>
					<div className="flex flex-col items-center justify-center">
						<div className="w-6 h-1 bg-white mb-1"></div>
						<div className="w-6 h-1 bg-white mb-1"></div>
						<div className="w-6 h-1 bg-white"></div>
					</div>
				</Button>
			</div>
			<Drawer open={isOpen} onClose={handleClose}>
				<Drawer.Header title="MENÚ" titleIcon={() => <></>} />
				<Drawer.Items>
					<Sidebar
						aria-label="Sidebar with multi-level dropdown example"
						className="[&>div]:bg-transparent [&>div]:p-0"
					>
						<div className="flex h-full flex-col justify-between py-2">
							<div>
								<form className="pb-3 md:hidden">
									<TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
								</form>
								<Sidebar.Items>
									<Sidebar.ItemGroup>
										<Sidebar.Item href="/" icon={HiChartPie}>
											Dashboard
										</Sidebar.Item>
										<Sidebar.Item href="/e-commerce/products" icon={HiShoppingBag}>
											Products
										</Sidebar.Item>
										<Sidebar.Item href="/users/list" icon={HiUsers}>
											Users list
										</Sidebar.Item>
										<Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
											Sign in
										</Sidebar.Item>
										<Sidebar.Item href="/authentication/sign-up" icon={HiPencil}>
											Sign up
										</Sidebar.Item>
										<Sidebar.Item href="/authentication/log-out" icon={HiLogout}>
											Log-out
										</Sidebar.Item>
									</Sidebar.ItemGroup>
									<Sidebar.ItemGroup>
										<Sidebar.Item href="https://github.com/themesberg/flowbite-react/" icon={HiClipboard}>
											Docs
										</Sidebar.Item>
										<Sidebar.Item href="https://flowbite-react.com/" icon={HiCollection}>
											Components
										</Sidebar.Item>
										<Sidebar.Item href="https://github.com/themesberg/flowbite-react/issues" icon={HiInformationCircle}>
											Help
										</Sidebar.Item>
									</Sidebar.ItemGroup>
								</Sidebar.Items>
							</div>
						</div>
					</Sidebar>
				</Drawer.Items>
			</Drawer>
		</>
	);
};
