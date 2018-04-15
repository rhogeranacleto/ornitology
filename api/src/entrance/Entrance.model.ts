import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { Item } from '../item/Item.model';
import { BaseModel } from '../Model';

@Entity()
export class Entrance extends BaseModel {

	@PrimaryGeneratedColumn()
	id: number;

	@Column('timestamp')
	date: Date;

	@Column()
	amount: number;

	@Column()
	value: number;

	@Column()
	location: string;

	@Column({ type: 'int' })
	itemId: number;

	@OneToMany(() => Item, item => item.id)
	@JoinColumn({ name: 'itemId' })
	item: Item;
}