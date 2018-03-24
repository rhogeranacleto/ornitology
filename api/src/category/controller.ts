import { CategoryModel, ICategory } from './model';

export class ItemController {

	public static getAll() {

		return CategoryModel.find();
	}

	public static create(item: ICategory) {

		return item.save();
	}
}