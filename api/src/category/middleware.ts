import { Request } from 'hapi';
import { ItemController } from './controller';
import { CategoryModel } from './model';

export function create(request: Request) {

	return ItemController.create(new CategoryModel(request.payload));
}

export function getAll(request: Request) {

	return ItemController.getAll();
}