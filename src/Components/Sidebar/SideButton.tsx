import { FC, ComponentProps } from 'react';

interface Props {
	ariaLabel: string;
	icon: FC<ComponentProps<'svg'>>;
}

export const SideButton: FC<Props> = ({ ariaLabel, icon: Icon }) => {
	return (
		<a
			aria-label={ariaLabel}
			href="https://github.com/LautaRB/Todo-list-Front"
			target="_blank"
			rel="noopener noreferrer"
			className="icon-btn"
		>
			<Icon className="h-auto w-6 text-zinc-600 dark:text-zinc-400" />
		</a>
	);
};
