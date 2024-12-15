export const StickyNote: React.FC<{
	title: string;
	children: React.ReactNode;
	color?: string;
}> = ({ title, children, color = 'bg-yellow-100' }) => (
	<div className={`sticky-note ${color}`}>
		<h3 className="text-lg font-bold mb-2">{title}</h3>
		<div className="font-handwritten">{children}</div>
	</div>
);
