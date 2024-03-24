import type { APIRoute } from "astro";
import connectDB from "../../../db/db.js";
import { $user } from "../../../store/userStore.js";
import { likeImage } from "../../../controllers/likeController.js";

/**
 * Handles the POST request for the API route.
 * 
 * @param {Object} options - The options object containing the request and redirect functions.
 * @returns {Promise<Response>} - A promise that resolves to a Response object.
 */
export const POST: APIRoute = async ({ request, redirect }) => {

  if(!$user?.value || $user.value.length === 0)
  {
    return redirect("/auth");
  }

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