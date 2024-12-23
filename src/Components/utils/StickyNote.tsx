interface Props {
	title?: string;
	children: React.ReactNode;
	color?: string;
	className?: string;
	animation?: boolean;
}

const animationStyle = 'transform transition-all duration-300 hover:scale-105 hover:rotate-1';

export const StickyNote: React.FC<Props> = ({
	title,
	children,
	color = 'yellow',
	className = '',
	animation = false,
}) => (
	<div
		className={`${
			animation ? animationStyle : ''
		} sticky-note bg-${color}-100 after:border-b-${color}-100 after:border-l-${color}-100 ${className}`}
	>
		{title && <h3 className="text-lg mb-2">{title}</h3>}
		<div className="font-handwritten text-sm">{children}</div>
	</div>
);
