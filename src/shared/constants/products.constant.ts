export interface IProduct {
	id: number;
	name: string;
	storage: string;
	color: string;
	price: number;
	image: string;
}

export const PRODUCTS: IProduct[] = [
	{
		id: 1,
		name: 'iPhone 16',
		storage: '128GB',
		color: 'Чёрный',
		price: 69990,
		image: 'iphone-16-black.jpg',
	},
	{
		id: 2,
		name: 'iPhone 16',
		storage: '256GB',
		color: 'Бирюзовый',
		price: 76990,
		image: 'iphone-16-turquoise.jpg',
	},
	{
		id: 3,
		name: 'iPhone 16',
		storage: '128GB',
		color: 'Ультрамариновый',
		price: 69990,
		image: 'iphone-16-ultramarine.webp',
	},
	{
		id: 4,
		name: 'iPhone 16',
		storage: '256GB',
		color: 'Розовый',
		price: 76990,
		image: 'iphone-16-pink.jpg',
	},
];
