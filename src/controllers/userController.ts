import type { AstroCookies } from "astro";
import { User } from "../models/userModel";
import { addUser } from "../store/userStore";
import jwToken from "../utils/jwToken";

/**
 * Logs in a user by validating their email and password.
 * 
 * @param cookies - The AstroCookies object used to set the JWT token.
 * @param request - The Request object containing the user's login data.
 * @returns A Response object indicating the success or failure of the login process.
 */
export const login = async (cookies: AstroCookies , request: Request) => {
  const data = await request.formData();
  const email = data.get("email");
  const password = data.get("password");
  
  if (!email || !password) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 404 }
    );
  }

  const user = await User.findOne({ email });

  if(user && (await user.matchPassword(password))){
    addUser(user);
    jwToken(cookies, user._id.toString());
  }
  else{
    return new Response(
      JSON.stringify({
        message: "Something went wrong ",
      }),
      { status: 500 }
    );
  }
}

/**
 * Registers a new user.
 * 
 * @param cookies - The AstroCookies object used to set the JWT token.
 * @param request - The Request object containing the user registration data.
 * @returns The newly created user object.
 * @throws Error if the user already exists.
 */
export const register = async (cookies: AstroCookies, request: Request) => {
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
  
  return user;
}

export const logout = async(cookies: AstroCookies, request: Request) => {
  cookies.delete('jwToken');
  const token = cookies.get('jwToken');
  return token;
}

/**
 * Updates a user's information in the database.
 * 
 * @param cookies - The AstroCookies object containing the user's cookies.
 * @param request - The Request object containing the user's request data.
 * @returns The updated user object.
 * @throws Error if any required fields are missing, if the user does not exist, or if the user update fails.
 */
export const update = async(data : any) => {
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
  if(!userExists){
    console.log(userExists)
    throw new Error("User does not exist")
  }

  const user = await User.updateOne({ email }, { name, email });

  if(!user){
    throw new Error("User update failed");
  };

  return user;
}

/**
 * Retrieves a user from the database based on their email.
 * 
 * @param email - The email of the user to retrieve.
 * @returns A promise that resolves to the user object if found, or null if not found.
 */
export const getUser = async(email: string) => {
  return await User.findOne({ email });
}