import type { APIRoute } from "astro";
import connectDB from "../../../db/db.js";
import { $user } from "../../../store/userStore.js";
import { deleteLike, getUserLikes, likeImage } from "../../../controllers/likeController.js";


export const POST: APIRoute = async ({ request, redirect }) => {

  if(!$user?.value || $user.value.length === 0)
  {
    return redirect("/auth");
  }

  connectDB();
  const like = await likeImage(request, $user.value![0]._id.toString())

  if (!like)
  {
    console.log("failed to like pin");
  }

  return redirect("/")
};


export const GET: APIRoute = async ({ redirect }) => {

  if(!$user?.value || $user.value.length === 0)
  {
    return redirect("/auth");
  }
  
  const connection = await connectDB();

  if(!connection)
  {
    return new Response("Failed to connect to the database", {status:503})
  }

  const likes =  await getUserLikes($user?.value![0]?._id)

  if(!likes)
  {
    return new Response("Failed to get user likes")
  }
  
  return new Response(JSON.stringify(likes.map(like => ({
    _id      : like._id,
    userId   : like.userId,
    photoUrl : like.photoUrl,
    photoId  : like.photoId,
    createdAt: like.createdAt,
    updatedAt: like.updatedAt,
  })))) 
};

export const DELETE: APIRoute = async ({request, redirect}) => {

  if(!$user?.value || $user.value.length === 0)
  {
    return redirect("/auth");
  }

  connectDB();
  const like = await deleteLike(request)

  if (!like)
  {
    console.log("failed to delete like");
  }

  return redirect("/")
}