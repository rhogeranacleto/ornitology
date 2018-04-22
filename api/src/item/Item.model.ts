import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../category/Category.model';

enum Unity {
	un = 'un',
	kg = 'kg',
	g = 'g'
}

@Entity()
export class Item {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column({
		enum: Unity
	})
	unity: string;

	@Column({ type: 'int', nullable: true })
	categoryId: number;

	@OneToOne(() => Category, category => category.id)
	@JoinColumn({ name: 'categoryId' })
	category: Category;

	@Column({ default: 0 })
	amount: number;

	@Column('timestamp', { nullable: true })
	lastEntranceDate: Date;

	@Column('double precision', { default: 0 })
	lastEntranceValue: number;

	@Column('double precision', { default: 0 })
	averageValue: number;

	constructor(data: any) {

		Object.assign(this, data);
	}
}