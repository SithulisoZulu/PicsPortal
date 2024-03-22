import { Schema, model } from 'mongoose';
import type { ILike } from '../interfaces/ILike';

const likeSchema = new Schema<ILike>({
  userId: { type: String, required: true },
  photoUrl: { type: String, required: true },
  photoId: { type: String, required: true },
}, {
  timestamps: true
});

/**
 * Creates a Mongoose model for the 'Like' collection.
 * 
 * @param {ILike} - The interface defining the structure of a 'Like' document.
 * @returns {Model<ILike>} - The Mongoose model for the 'Like' collection.
 */
export const Like = model<ILike>('Like', likeSchema);