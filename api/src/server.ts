import { Server } from 'hapi';

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

	console.log('Rodando');
}