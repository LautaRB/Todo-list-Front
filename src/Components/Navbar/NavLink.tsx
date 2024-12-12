interface Props {
	children: React.ReactNode;
	className?: string;
	href: string | '#';
}

export const NavLink: React.FC<Props> = ({ children, className, href }) => {
	return (
		<a
			className={`${className} nav-link cursor-pointer text-black text-3xl hover:text-orange-700 transition-colors duration-300`}
			href={href}
		>
			{children}
		</a>
	);
};
