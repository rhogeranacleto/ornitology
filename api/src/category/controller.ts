import { Category } from './Category.model';
import { getManager } from 'typeorm';

export class ItemController {

	public static getAll() {

		return getManager().find(Category);
	}

	public static async create(category: Category) {

		return await getManager().save(category);
	}
}