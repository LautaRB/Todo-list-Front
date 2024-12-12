interface Props {
	children: React.ReactNode;
}

export const NavLink = ({ children }: Props) => {
	return (
		<a className="nav-link text-black text-3xl hover:text-orange-700 transition-colors duration-300">
			{children}
		</a>
	);
};
