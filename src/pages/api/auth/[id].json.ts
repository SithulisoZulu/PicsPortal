import type { APIRoute } from "astro";
import connectDB from "@db/db.js";
import { deleteAccount, login } from "@controllers/userController";

export const DELETE: APIRoute = async ({ redirect, params}) => {

  const connection = await connectDB();

  if(!connection)
  {
    return new Response("Failed to connect to the database", {status:500})
  }

  const id = params.id

  const account = await deleteAccount(id!)

  if (!account)
  {
    return new Response(JSON.stringify({message:"No such like found"}),{status:404});
  }

  return new Response(JSON.stringify({
    message: account,
    status : 200,
  }))
}