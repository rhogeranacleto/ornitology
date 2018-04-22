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

	@Column('double precision')
	value: number;

	@Column('double precision', { default: 0 })
	totalValue: number;

	@Column()
	location: string;

	@Column({ type: 'int' })
	itemId: number;

	@OneToMany(() => Item, item => item.id)
	@JoinColumn({ name: 'itemId' })
	item: Item;
}