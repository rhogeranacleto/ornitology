import { Category } from '../category/category';

export enum Unity {
	un = 'un',
	kg = 'kg',
	g = 'g'
}

export class Item {
	id: number;
	name: string;
	categoryId: string;
	category: Category;
	unity: Unity;
}

export interface IEntrance {
	itemId: number;
	amount: number;
	value: number;
	date: Date;
	location: string;
}