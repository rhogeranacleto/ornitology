import { Server } from 'hapi';
import { categoryRoutes } from './category/routes';
import { itemRoutes } from './item/routes';

export async function createServer() {

	const server = new Server({
		host: 'localhost',
		port: process.env.PORT || 3000
	});

	try {

		await server.start();
	} catch (err) {

		console.log(err);
		process.exit(1);
	}

	server.route(itemRoutes);
	server.route(categoryRoutes);

	console.log('Rodando');
}