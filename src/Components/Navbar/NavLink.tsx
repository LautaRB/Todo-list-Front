import { Link } from 'react-router-dom';

interface Props {
	children: React.ReactNode;
	className?: string;
	href: string;
}

export const NavLink: React.FC<Props> = ({ children, className, href }) => {
	return (
		<Link
			className={`${className} font-heading nav-link cursor-pointer text-black text-xl hover:text-amber-700 transition-colors duration-300`}
			to={href}
		>
			{children}
		</Link>
	);
};
