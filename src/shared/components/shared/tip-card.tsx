import { Card, CardDescription, CardHeader, CardTitle } from '../ui';

import type { IHugeIcon } from './icons';

interface Props {
	title: string;
	description: string;
	icon: IHugeIcon;
}

export function TipCard({ title, description, icon: Icon }: Props) {
	return (
		<Card className='w-full max-w-sm min-w-[18em] border-dashed'>
			<CardHeader>
				{Icon && <Icon className='size-8' />}

				<CardTitle className='text-xl font-bold'>{title}</CardTitle>

				<CardDescription>{description}</CardDescription>
			</CardHeader>
		</Card>
	);
}
