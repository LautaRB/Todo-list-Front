interface Props {
	children: React.ReactNode;
	href: string;
}

export const NavLink: React.FC<Props> = ({ children, href }) => {
	return (
		<a
			className={`font-heading cursor-pointer text-xl hover:text-blue-600 transition-colors duration-300`}
			href={href}
		>
			{children}
		</a>
	);
};
