interface Props {
	title?: string;
	children: React.ReactNode;
	color?: string;
	className?: string;
}

export const StickyNote: React.FC<Props> = ({
	title,
	children,
	color = 'yellow',
	className = '',
}) => (
	<div
		className={`sticky-note bg-${color}-100 after:border-b-${color}-100 after:border-l-${color}-100 ${className}`}
	>
		{title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
		<div className="font-handwritten">{children}</div>
	</div>
);
