import { ServerRoute } from 'hapi';
import { create, getAll } from './middleware';

export const categoryRoutes: ServerRoute[] = [
	{
		handler: create,
		method: 'POST',
		path: '/category'
	},
	{
		handler: getAll,
		method: 'GET',
		path: '/categories'
	}
];