interface Props {
	children: React.ReactNode;
	href: string;
}

export const NavLink: React.FC<Props> = ({ children, href }) => {
	return (
		<a className={`cursor-pointer text-lg nav-link`} href={href}>
			{children}
		</a>
	);
};
