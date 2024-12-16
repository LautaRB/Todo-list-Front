interface ErrorLayoutProps {
	children: React.ReactNode;
}

export const ErrorLayout: React.FC<ErrorLayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen">
			<div className="background-error fixed inset-0 -z-10"></div>
			<main className="flex-grow container mx-auto z-0">{children}</main>
		</div>
	);
};
