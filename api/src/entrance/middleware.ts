import { Request } from 'hapi';
import { EntranceController } from './controller';
import { Entrance } from './Entrance.model';

export function createEntrance(request: Request) {

	return EntranceController.create(new Entrance(request.payload));
}