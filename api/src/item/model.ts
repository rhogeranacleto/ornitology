import { Document, model, Model, Schema } from 'mongoose';

export interface IItem extends Document {
	name: string;
}

export const ItemSchema = new Schema({
	name: String,
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category'
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