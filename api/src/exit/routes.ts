import { createExit } from './middleware';
import { ServerRoute } from 'hapi';

export const exitRoutes: ServerRoute[] = [
	{
		handler: createExit,
		method: 'POST',
		path: '/exit'
	}
];