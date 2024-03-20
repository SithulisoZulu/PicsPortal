import type { APIRoute } from "astro";
import connectDB from "../../../db/db.js";
import { register } from "../../../controllers/userController.js";

connectDB();

export const POST: APIRoute = async ({ cookies,  request, redirect }) => {
  const user = await register(cookies, request)
  .then((data) => data)
  .catch(() => null);
  
  if (!user)
  {
    console.log("User not found");
  }

  return redirect("/welcome")
};