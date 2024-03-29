import type { IReview } from "@interfaces/IReview";
import { Review } from "@models/reviewModel";

export const addReview = async (req: Request ) => {
    const data = await req.formData();
    const email = data.get("email");
    const fullName = data.get("fullName");
    const rating = data.get("rating");
    const review = data.get("review");

    if(!email || !fullName || !rating || !review)
    {
        throw new Error('Missing Data');
    }
  
    const newReview = await Review.create({ email, fullName, rating, review});

    if(!newReview)
    {
        throw new  Error('Failed to create a new review')
    }

    return newReview;
};

export const GetReviews = async () => {
    const reviews: IReview[] = await Review.find();
    return reviews; 
}