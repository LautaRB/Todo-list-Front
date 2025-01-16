import { FC, ComponentProps } from 'react';

interface Props {
	ariaLabel: string;
	icon: FC<ComponentProps<'svg'>>;
	onClick?: () => void;
}

export const SideButton: FC<Props> = ({ ariaLabel, icon: Icon, onClick }) => {
	return (
		<button
			aria-label={ariaLabel}
			onClick={onClick}
			className="icon-btn"
		>
			<Icon className="h-auto w-6 text-zinc-600 dark:text-zinc-400" />
		</button>
	);
};
