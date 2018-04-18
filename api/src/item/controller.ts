import { getManager } from 'typeorm';
import { Item } from './Item.model';

export class ItemController {

	public static async getAll() {

		const manager = getManager();

		return await manager.find(Item);
	}

	public static create(item: Item) {

		return getManager().save(item);
	}
}