import { Request } from 'hapi';
import { ExitController } from './controller';
import { Exit } from './Exit.model';

export function createExit(request: Request) {

	return ExitController.create(new Exit(request.payload));
}