import {
	Control,
	Controller,
	FieldError,
	FieldValues,
	Path,
} from 'react-hook-form';

interface Props<T extends FieldValues> {
	name: Path<T>;
	control: Control<T>;
	type?: string;
	placeholder?: string;
	error?: FieldError;
}

export const Input = <T extends FieldValues>({
	name,
	control,
	type = 'text',
	placeholder,
	error,
}: Props<T>) => {
	return (
		<div className="form-group">
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<input
						id={name as string}
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
