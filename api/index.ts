import 'reflect-metadata';
import { connectDB } from './src/db';
import { createServer } from './src/server';

async function bootstrap() {

	try {

		await connectDB();
		createServer();
	} catch (err) {

		console.log('Não foi possível iniciar', err);
	}
}

bootstrap();