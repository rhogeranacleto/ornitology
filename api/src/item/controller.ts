import { getManager } from 'typeorm';
import { Item } from './Item.model';

export class ItemController {

	public static getAll() {

		return getManager().find(Item);
	}

	public static create(item: Item) {

		return getManager().save(item);
	}
}