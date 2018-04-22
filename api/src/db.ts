import { createConnection } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
// tslint:disable-next-line:no-var-requires
const pg = require('pg');

export async function connectDB() {

	try {

		console.log(process.env.NODE_ENV);

		pg.types.setTypeParser(1700, (v: any) => parseFloat(v));

		const connectionConfig = {
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			database: 'ornitology',
			username: 'rhogeranacleto',
			password: 'postgres',
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
		} as PostgresConnectionOptions;

		const conn = await createConnection(process.env.NODE_ENV === 'prod' ? {
			...connectionConfig,
			host: 'ec2-54-83-19-244.compute-1.amazonaws.com',
			database: 'd9aobj73i2kfrl',
			username: 'offokkwmiyaqin',
			password: 'f169bac92d3939fb6eab06437daa40e29baf5c87dfa20074511e25bba9dbdf7d'
		} as PostgresConnectionOptions : connectionConfig);

		console.log('Conectado', conn.isConnected, conn.entityMetadatas.map(j => j.name));
	} catch (err) {

		console.log(err);
	}
}