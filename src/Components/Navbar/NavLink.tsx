import { Link } from 'react-router-dom';

interface Props {
	children: React.ReactNode;
	href: string;
}

export const NavLink: React.FC<Props> = ({ children, href }) => {
	return (
		<Link
			className={`font-heading cursor-pointer text-xl hover:text-blue-600 transition-colors duration-300`}
			to={href}
		>
			{children}
		</Link>
	);
};
