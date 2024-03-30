import type { APIRoute } from "astro";
import { likeImage } from "@controllers/likeController";
import { $user } from '@store/userStore';
import connectDB from "@db/db";

/**
 * Handles the POST request for the API route.
 * 
 * @param {Object} options - The options object containing the request and redirect functions.
 * @returns {Promise<Response>} - A promise that resolves to a Response object.
 */
export const POST: APIRoute = async ({ request, redirect }) => {

  if(!$user?.value || $user.value.length === 0 || $user.value![0]._id === "")
  {
    const url ="/auth"
    return redirect(url);
  }

  console.log($user)

  const connection = await connectDB();

  if(!connection) {
    return new Response("Failed to connect to database", { status: 500 });
  }

  const like = await likeImage(request, $user.value![0]._id.toString())

  if (!like)
  {
    console.log("failed to like pin");
  }

  return new Response(JSON.stringify({
    message: like,
    status: 200
  }))
};