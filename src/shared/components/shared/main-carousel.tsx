import Autoplay from 'embla-carousel-autoplay';

import { PRODUCTS } from '@/shared/constants';

import { Carousel, CarouselContent, CarouselItem } from '../ui';

export function MainCarousel() {
	return (
		<Carousel className='w-full' plugins={[Autoplay({ delay: 3000 })]}>
			<CarouselContent>
				{PRODUCTS.map((item, index) => (
					<CarouselItem key={index}>
						<div className='flex flex-col items-center justify-center text-center'>
							<div>
								<h4 className='text-2xl font-bold'>{item.name}</h4>

								<p className='text-muted-foreground text-sm'>
									{item.storage} {item.color}
								</p>
							</div>

							<img
								src={`/${item.image}`}
								alt={`${item.name} ${item.storage} ${item.color}`}
								loading='lazy'
								width={500}
								height={500}
								className='size-full rounded-lg object-cover'
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
