interface Props {
    link?: string;
    style: string;
	children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ link, style, children }) => {
	return (
        <a href={link}>
            <button className={style}>{children}</button>
        </a>
	);
};