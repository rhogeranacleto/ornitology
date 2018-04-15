import { Entity, Column, OneToOne, ObjectIdColumn, ObjectID } from 'typeorm';
import { Category } from '../category/Category.model';

enum Unity {
	un = 'un',
	kg = 'kg',
	g = 'g'
}

@Entity()
export class Item {

	@ObjectIdColumn()
	id: ObjectID;

	@Column({
		enum: Unity
	})
	unity: string;

	@OneToOne(() => Category)
	category: Category;

	constructor(data: any) {

		Object.assign(this, data);
	}
}