import { Request } from 'hapi';
import { ItemController } from './controller';
import { ItemModel } from './model';

export function create(request: Request) {

	return ItemController.create(new ItemModel(request.payload));
}

export function getAll(request: Request) {

	return ItemController.getAll();
}