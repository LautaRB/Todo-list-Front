interface Props {
	children: React.ReactNode;
	background: 'error' | 'main' | 'login';
}

export const Base: React.FC<Props> = ({ children, background = 'main' }) => {
	return (
		<div className="min-h-screen">
			<main className="flex-grow container mx-auto z-0">
				<div className={`background-${background} fixed inset-0 -z-10`}></div>
				{children}
			</main>
		</div>
	);
};
