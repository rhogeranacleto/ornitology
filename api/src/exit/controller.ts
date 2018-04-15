import { Exit } from './Exit.model';
import { getManager } from 'typeorm';
import { Item } from '../item/Item.model';

export class ExitController {

	static async create(exit: Exit) {

		const manager = getManager();

		await manager.save(exit);

		const item = await manager.findOneById(Item, exit.itemId);

		item.amount -= exit.amount;

		await manager.save(item);

		return exit;
	}
}