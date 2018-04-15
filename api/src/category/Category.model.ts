import { Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Category {

	@ObjectIdColumn()
   id: ObjectID;

	@Column()
	name: string;

	@CreateDateColumn()
	createdDate: Date;

	@UpdateDateColumn()
	updatedDate: Date;

	constructor(data: any) {

		Object.assign(this, data);
	}
}