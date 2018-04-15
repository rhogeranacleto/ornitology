import { createEntrance } from './middleware';
import { ServerRoute } from 'hapi';

export const entranceRoutes: ServerRoute[] = [
	{
		handler: createEntrance,
		method: 'POST',
		path: '/entrance'
	}
];