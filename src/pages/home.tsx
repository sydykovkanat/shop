import { ScrollArea } from '@radix-ui/react-scroll-area';

import {
	Container,
	MainCarousel,
	ProductCard,
	TipCard,
} from '@/shared/components/shared';
import { ScrollBar } from '@/shared/components/ui';
import { PRODUCTS, TIPS } from '@/shared/constants';

export function Home() {
	return (
		<>
			<Container className='space-y-8 py-4'>
				<MainCarousel />

				<ScrollArea className='flex gap-x-4 overflow-x-scroll'>
					{TIPS.map((item, index) => (
						<TipCard
							key={index}
							title={item.title}
							description={item.description}
							icon={item.icon}
						/>
					))}

					<ScrollBar orientation='horizontal' />
				</ScrollArea>

				<section className='space-y-8'>
					<div>
						<h3 className='text-2xl leading-none font-bold'>
							Линейка смартфонов
						</h3>

						<span className='text-muted-foreground text-lg leading-none font-semibold'>
							Выберите свой идеальный iPhone
							<br />
							Снизу все модели которые в наличии
						</span>
					</div>

					<div className='space-y-4'>
						{PRODUCTS.map((item) => (
							<ProductCard product={item} key={item.id} />
						))}
					</div>
				</section>
			</Container>
		</>
	);
}
