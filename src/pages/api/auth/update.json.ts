import type { APIRoute } from "astro";
import connectDB from "../../../db/db.js";
import { getUser, update } from "../../../controllers/userController.js";
import { addUser } from "../../../store/userStore.js";

connectDB();

export const POST: APIRoute = async ({ request, redirect }) => {
  const data = await request.formData();
  const email = data.get("email")?.toString()!;
  
  const user = await update(data)
  .then((data) => data)
  .catch((error) => console.log(error));
  
  if(!user)
  {
    throw new Error("Something went wrong while updating the user");
  }

  const updatedUser = await getUser(email)
  addUser(updatedUser!)

  return redirect(`/profile/${updatedUser?._id}`)
};