import { Entrance } from './Entrance.model';
import { getManager } from 'typeorm';

export class EntranceController {

	static create(entrance: Entrance) {

		return getManager().save(entrance);
	}

	static getLocations() {

		return getManager().query('select distinct(location) from entrance').then(data => data.map((d: any) => d.location));
	}
}