interface Props {
	title: string;
	children: React.ReactNode;
}

export const FormContainer: React.FC<Props> = ({ title, children }) => {
	return (
		<section className="section-container flex flex-col items-center justify-around gap-5">
			<h2 className="text-2xl font-bold">{title}</h2>
			{children}
		</section>
	);
};
