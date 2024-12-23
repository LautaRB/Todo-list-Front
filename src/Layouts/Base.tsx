interface Props {
	children: React.ReactNode;
	background: 'red' | 'blue' | 'yellow';
}

export const Base: React.FC<Props> = ({ children, background = 'main' }) => {
	return (
		<div className="min-h-screen min-w-screen">
			<main className="container mx-auto">
				<div className={`background-${background} fixed inset-0 -z-10`}></div>
				{children}
			</main>
		</div>
	);
};
