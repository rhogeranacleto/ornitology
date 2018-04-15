import { Entrance } from './Entrance.model';
import { getManager } from 'typeorm';

export class EntranceController {

	static create(entrance: Entrance) {

		return getManager().save(entrance);
	}
}