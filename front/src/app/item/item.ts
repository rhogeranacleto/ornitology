import { Category } from '../category/category';

export enum Unity {
	un = 'un',
	kg = 'kg',
	g = 'g'
}

export class Item {
	name: string;
	categoryId: string;
	category: Category;
	unity: Unity;
}
