import type { APIRoute } from "astro";
import connectDB from "../../../db/db.js";
import { login } from "../../../controllers/userController.js";

connectDB();

export const POST: APIRoute = async ({ cookies,  request, redirect }) => {

  const user = await login(cookies, request)
  .then((data) => data)
  .catch(() => null);

  return redirect("/")
};