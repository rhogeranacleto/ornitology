import { Exit } from './Exit.model';
import { getManager } from 'typeorm';

export class ExitController {

	static create(exit: Exit) {

		return getManager().save(exit);
	}
}