import type { APIRoute } from "astro";
import connectDB from "@db/db";
import { addReview, GetReviews } from "@controllers/reviewController";
import type { IReview } from "@interfaces/IReview";

export const POST: APIRoute = async ({ request, redirect }) => {

    const connect = await connectDB();
    if(!connect)
    {
        throw new Error("failed to connect to the database")
    }

    const review = await addReview(request);

    if(!review)
    {
        throw new Error ("No review")
    }
    
    return redirect("/reviews")
};

export const GET: APIRoute = async({ request }) => {

    const connect = await connectDB();
    if(!connect)
    {
        throw new Error("failed to connect to the database")
    }

    const reviews = await GetReviews()

    if(!reviews){

    }

    return new Response(JSON.stringify(reviews.map((review: IReview) => ({
       email    : review.email,
       fullName : review.fullName,
       review   : review.review,
       rating   : review .rating,
       createdAt: review.createdAt,
       updatedAt: review.updatedAt,
    })))) 
}