import type { IProduct } from '@/shared/constants';
import { useDevice } from '@/shared/providers';

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui';

interface Props {
	product: IProduct;
}

export function ProductCard({ product }: Props) {
	// const message = `Здравствуйте!\nЯ хочу купить: ${product.name} (${product.storage}, ${product.color}) за ${product.price} сом.`;
	// const telegramLink = `https://t.me/sydykovkanat?text=${encodeURIComponent(message)}`;

	const { device } = useDevice();

	return (
		<Card className='gap-0 border-dashed'>
			<CardHeader className='text-center'>
				<CardTitle className='text-2xl leading-none font-bold'>
					{product.name} {device}
				</CardTitle>

				<CardDescription className='text-sm leading-none'>
					{product.storage} {product.color}
				</CardDescription>
			</CardHeader>

			<CardContent>
				<img
					src={`/${product.image}`}
					alt={`${product.name} ${product.storage} ${product.color}`}
					loading='lazy'
					className='size-full rounded-lg object-cover'
				/>
			</CardContent>

			<CardFooter className='justify-center'>
				<Button size={'lg'} className='cursor-pointer rounded-full'>
					Купить за {product.price} сом
				</Button>
			</CardFooter>
		</Card>
	);
}
