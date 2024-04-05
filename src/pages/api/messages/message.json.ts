import { sendMessage } from "@controllers/messageController";
import connectDB from "@db/db";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect }) => {

    const connect = await connectDB();
    if(!connect)
    {
        throw new Error("failed to connect to the database")
    }

    const review = await sendMessage(request);

    if(!review)
    {
        throw new Error ("No review")
    }
    
    return redirect("/message")
};
