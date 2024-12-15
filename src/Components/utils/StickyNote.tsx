export const StickyNote: React.FC<{
	title: string;
	children: React.ReactNode;
	color?: string;
}> = ({ title, children, color = 'yellow' }) => (
	<div
		className={`sticky-note bg-${color}-100 after:border-b-${color}-100 after:border-l-${color}-100`}
	>
		<h3 className="text-lg font-bold mb-2">{title}</h3>
		<div className="font-handwritten">{children}</div>
	</div>
);
