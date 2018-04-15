import 'reflect-metadata';
import { createConnection } from 'typeorm';
// import { connectDB } from './src/db';
import { createServer } from './src/server';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

async function bootstrap() {

	try {

		const conn = await createConnection({
			type: 'postgres',
			// type: 'mongodb',
			// url: 'mongodb://root:root@ds263707.mlab.com:63707/clean-raven',
			host: 'ec2-54-83-19-244.compute-1.amazonaws.com',
			port: 5432,
			database: 'd9aobj73i2kfrl',
			username: 'offokkwmiyaqin',
			password: 'f169bac92d3939fb6eab06437daa40e29baf5c87dfa20074511e25bba9dbdf7d',
			synchronize: true,
			logging: false,
			ssl: true,
			entities: [
				'src/**/*.model.ts',
				'src/**/*.model.js',
			],
			subscribers: [
				'src/**/*.subscriber.ts'
			]
		} as PostgresConnectionOptions);

		console.log('Conectado', conn.isConnected, conn.entityMetadatas.map(j => j.name));

		createServer();
	} catch (err) {

		console.log(err);
	}
}

bootstrap();