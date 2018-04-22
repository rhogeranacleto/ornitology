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
	amount: number;
	readonly lastEntranceDate?: Date;
	readonly averageValue?: number;
}

export interface IEntrance {
	readonly id?: number;
	itemId: number;
	amount: number;
	value: number;
	totalValue: number;
	date: Date;
	location: string;
}

export interface IExit {
	readonly id?: number;
	itemId: number;
	amount: number;
	date: Date;
}