import { Link } from 'react-router-dom';

interface Props {
	children: React.ReactNode;
	className?: string;
	href: string;
}

export const NavLink: React.FC<Props> = ({ children, className, href }) => {
	return (
		<Link
			className={`${className} nav-link cursor-pointer text-black text-xl hover:text-amber-700 transition-colors duration-300 font-handwritten`}
			to={href}
		>
			{children}
		</Link>
	);
};
