interface Props {
	children: React.ReactNode;
	href: string;
}

export const NavLink: React.FC<Props> = ({ children, href }) => {
	return (
		<a className={`font-heading cursor-pointer text-xl nav-link`} href={href}>
			{children}
		</a>
	);
};
