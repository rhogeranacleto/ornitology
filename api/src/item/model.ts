import { Document, model, Model, Schema } from 'mongoose';
import { ICategory } from '../category/model';

enum Unity {
	un = 'un',
	kg = 'kg',
	g = 'g'
}

export interface IItem extends Document {
	name: string;
	category: ICategory;
	unity: Unity;
}

export const ItemSchema = new Schema({
	name: String,
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category'
	},
	unity: {
		type: String,
		enum: Object.keys(Unity)
	}
}, {
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		},
		toObject: {
			virtuals: true
		},
		toJSON: {
			virtuals: true
		}
	});

// ItemSchema.loadClass(User);

export const ItemModel = model<IItem, Model<IItem>>('Item', ItemSchema);