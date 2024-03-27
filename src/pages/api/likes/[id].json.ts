import type { APIRoute } from "astro";
import { $user } from "@store/userStore";
import connectDB from "@db/db";
import { deleteLike } from "@controllers/likeController";

/**
 * DELETE function for API route.
 * 
 * This function handles the DELETE request for a specific resource.
 * 
 * @param {Object} options - The options object containing the request parameters.
 * @param {Function} options.redirect - The redirect function to redirect the user to another route.
 * @param {Object} options.params - The parameters object containing the request parameters.
 * @param {string} options.params.id - The ID of the resource to be deleted.
 * 
 * @returns {Response} - The response object containing the result of the DELETE request.
 * 
 * @throws {Response} - If the user is not authenticated, it redirects to the authentication route.
 * @throws {Response} - If there is an error connecting to the database, it returns a 503 status response.
 * @throws {Response} - If the resource with the specified ID is not found, it returns a 404 status response.
 * 
 * @example
 * DELETE({ redirect, params: { id: "123" } });
 */
export const DELETE: APIRoute = async ({ redirect, params}) => {

  if(!$user?.value || $user.value.length === 0)
  {
    return redirect("/auth");
  }

  const connection = await connectDB();

  if(!connection)
  {
    return new Response("Failed to connect to the database", {status:503})
  }

  const id = params.id

  const like = await deleteLike(id!)

  if (!like)
  {
    return new Response(JSON.stringify({message:"No such like found"}),{status:404});
  }

  return new Response(JSON.stringify({
    message: like,
    status: 200,
  }))
}