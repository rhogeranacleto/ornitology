import { Entrance } from './Entrance.model';
import { getManager } from 'typeorm';
import { Item } from '../item/Item.model';

export class EntranceController {

	static async create(entrance: Entrance) {

		const manager = getManager();

		await manager.save(entrance);

		const item = await manager.findOneById(Item, entrance.itemId);

		item.amount += (entrance.amount || 0);

		item.lastEntranceDate = entrance.date;
		console.log(entrance);
		item.lastEntranceValue = entrance.value;

		const avg = await manager.getRepository(Entrance)
			.createQueryBuilder('entrance')
			.select('avg(entrance.value)', 'value')
			.groupBy('entrance.itemId')
			.where('entrance.itemId = :id', {
				id: entrance.itemId
			}).getRawOne();

		item.averageValue = +(avg.value);

		await manager.save(item);

		return entrance;
	}

	static getLocations() {

		return getManager().query('select distinct(location) from entrance').then(data => data.map((d: any) => d.location));
	}
}