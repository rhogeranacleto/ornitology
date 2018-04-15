import { Request } from 'hapi';
import { ItemController } from './controller';
import { Item } from './Item.model';

export function create(request: Request) {

	return ItemController.create(new Item(request.payload));
}

export function getAll(request: Request) {

	return ItemController.getAll();
}