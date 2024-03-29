import { Schema, model } from 'mongoose';
import type { IReview } from '@interfaces/IReview';


const reviewSchema = new Schema<IReview>({
  email   : { type: String, required: true },
  fullName: { type: String, required: true },
  review  : { type: String, required: true },
  rating  : { type: Number, required: true },
}, {
  timestamps: true
});

/**
 * Creates a Mongoose model for the 'Review' collection with the specified schema.
 * 
 * @param {IReview} schema - The schema for the 'Review' collection.
 * @returns {Model<IReview>} - The Mongoose model for the 'Review' collection.
 */
export const Review = model<IReview>('Review', reviewSchema);