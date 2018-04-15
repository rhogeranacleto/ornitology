import { Request } from 'hapi';
import { ItemController } from './controller';
import { Category } from './Category.model';

export function create(request: Request) {

	return ItemController.create(new Category(request.payload));
}

export function getAll(request: Request) {

	return ItemController.getAll();
}