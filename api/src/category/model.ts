import { Document, model, Model, Schema } from 'mongoose';

export interface ICategory extends Document {
	name: string;
}

export const CategorySchema = new Schema({
	name: String
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

export const CategoryModel = model<ICategory, Model<ICategory>>('Category', CategorySchema);