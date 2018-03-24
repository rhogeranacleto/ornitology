import { IItem, ItemModel } from './model';

export class ItemController {

	public static getAll() {

		return ItemModel.find();
	}

	public static create(item: IItem) {

		return item.save();
	}
}