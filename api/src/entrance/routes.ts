import { createEntrance, getAllLocations } from './middleware';
import { ServerRoute } from 'hapi';

export const entranceRoutes: ServerRoute[] = [
	{
		handler: createEntrance,
		method: 'POST',
		path: '/entrance'
	},
	{
		handler: getAllLocations,
		method: 'GET',
		path: '/entrances/locations'
	}
];