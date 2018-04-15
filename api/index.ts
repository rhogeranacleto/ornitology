import 'reflect-metadata';
import { createConnection } from 'typeorm';
// import { connectDB } from './src/db';
import { createServer } from './src/server';

async function bootstrap() {

	try {

		const conn = await createConnection({
			type: 'mongodb',
			url: 'mongodb://root:root@ds263707.mlab.com:63707/clean-raven',
			// host: 'mongodb://root:root@ds263707.mlab.com',
			// port: 63707,
			// database: 'clean-raven',
			synchronize: true,
			logging: true,
			entities: [
				'src/**/*.model.ts',
				'src/**/*.model.js',
			],
			subscribers: [
				'src/**/*.subscriber.ts'
			]
		});

		console.log('Conectado', conn.entityMetadatas.map(j => j.name));

		createServer();
	} catch (err) {

		console.log(err);
	}
}

bootstrap();