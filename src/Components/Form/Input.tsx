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
						className={`w-full text-zinc-800 p-2 rounded-md border-none outline-gray-300 outline outline-[1px] placeholder:text-sm placeholder:text-gray-400 focus:dark:outline-yellow-300 focus:dark:outline-offset-0 ${
							error ? 'is-invalid' : ''
						}`}
					/>
				)}
			/>
			{error && <p className="text-red-500 text-xs pl-1 mt-2 dark:text-red-300">{error.message}</p>}
		</div>
	);
};
