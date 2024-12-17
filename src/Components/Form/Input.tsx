import { Control, Controller, FieldError } from 'react-hook-form';
import { SignFormData } from '@schemas/signForm';

interface Props {
	name: keyof SignFormData;
	control: Control<SignFormData>;
	type?: string;
	placeholder?: string;
	error?: FieldError;
}

export const Input: React.FC<Props> = ({
	name,
	control,
	type,
	placeholder,
	error,
}) => {
	return (
		<div className="form-group">
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<input
						id={name}
						type={type}
						placeholder={placeholder}
						{...field}
						className={`form-control ${error ? 'is-invalid' : ''}`}
					/>
				)}
			/>
			{error && <p className="error">{error.message}</p>}
		</div>
	);
};
