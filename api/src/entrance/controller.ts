import { Entrance } from './Entrance.model';
import { getManager } from 'typeorm';

export class EntranceController {

	static create(entrance: Entrance) {

		getManager().save(entrance);
	}
}