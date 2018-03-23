import * as mongoose from 'mongoose';

export function connectDB() {

	const db = mongoose.connection;

	db.on('error', function () {

		console.error('Não connect');
	});

	db.on('open', function () {

		console.log('conecto');
	});

	mongoose.connect('mongodb://root:root@ds263707.mlab.com:63707/clean-raven');

	return db;
}