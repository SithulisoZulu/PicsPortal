import type { APIRoute } from "astro";
import connectDB from "@db/db.js";
import { login } from "@controllers/userController.js";

export const POST: APIRoute = async ({ cookies,  request, redirect }) => {
  
  const connection = await connectDB();
  if(!connection) {
    return new Response("Invalid request", {status: 400});
  }
  const user: any = await login(cookies, request)
  .then((data) => data)
  .catch(() => null);

  if(user?.status === 401 || user === null){
    return redirect(`/error/${"login"}`)
  }
  return redirect("/")
};