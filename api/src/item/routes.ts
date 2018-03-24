import { ServerRoute } from 'hapi';
import { create, getAll } from './middleware';

export const itemRoutes: ServerRoute[] = [
	{
		handler: create,
		method: 'POST',
		path: '/item'
	},
	{
		handler: getAll,
		method: 'GET',
		path: '/items'
	}
];