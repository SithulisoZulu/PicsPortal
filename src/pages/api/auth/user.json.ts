import type { APIRoute } from "astro";
import connectDB from "../../../db/db";
import jwToken from "../../../utils/jwToken.js";
import { User } from "../../../models/userModel";
import { addUser } from "../../../store/userStore";

connectDB();

export const POST: APIRoute = async ({ cookies,  request }) => {
  const data = await request.formData();
  const email = data.get("email");
  const name = data.get("name");
  const password = data.get("password");
  
  if (!name || !email || !password) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }

  const userExists = await User.findOne({ email});
  if(userExists){
    throw new Error("User already exists")
  }

  const user = await User.create({ name, email, password});

  addUser(user);
  jwToken(cookies, user._id.toString());

  if(!user){
    return new Response("User not created", {status: 400});
  };
  
  return new Response(JSON.stringify({user}), {
    status: 200,
  })
};