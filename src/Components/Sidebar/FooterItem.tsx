import { FC, ComponentProps } from 'react';

interface Props {
	ariaLabel: string;
	icon: FC<ComponentProps<'svg'>>;
}

export const FooterItem: FC<Props> = ({ ariaLabel, icon: Icon }) => {
	return (
		<button
			aria-label={ariaLabel}
			className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
		>
			<Icon className="h-auto w-6 text-gray-600 dark:text-gray-400" />
		</button>
	);
};
