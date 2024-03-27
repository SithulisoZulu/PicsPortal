import type { APIRoute } from "astro";
import connectDB from "@db/db.js";
import { login } from "@controllers/userController.js";

export const POST: APIRoute = async ({ cookies,  request, redirect }) => {
  
  connectDB();
  const user = await login(cookies, request)
  .then((data) => data)
  .catch(() => null);

  if(user?.status === 401){
    return redirect(`/error/${"login"}`)
  }
  return redirect("/")
};