import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form';

interface Props<T extends FieldValues> {
	name: Path<T>;
	control: Control<T>;
	type?: string;
	placeholder?: string;
	error?: FieldError;
}

export const Input = <T extends FieldValues>({ name, control, type = 'text', placeholder, error }: Props<T>) => {
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
						className={`p-2 rounded-xl ${error ? 'is-invalid' : ''}`}
					/>
				)}
			/>
			{error && <p className="text-red-500 text-xs">{error.message}</p>}
		</div>
	);
};
