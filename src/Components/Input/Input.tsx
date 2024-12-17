interface Props {
	type: string;
	placeholder?: string;
	required?: boolean;
}

export const Input: React.FC<Props> = ({ type, placeholder, required }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			required={required}
		/>
	);
};
