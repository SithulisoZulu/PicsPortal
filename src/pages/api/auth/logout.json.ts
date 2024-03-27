import type { APIRoute } from "astro";
import { logout } from "@controllers/userController.js";
import { addUser } from "@store/userStore.js";

export const GET: APIRoute = async ({ cookies,  request, redirect }) => {
    const jwToken = await logout(cookies);
    if(jwToken)
    {
        return new Response("token found", {status: 400});
    }
    const User = {
        _id      : '',
        name     : '',
        email    : '',
        password : '',
        createdAt: '',
        updatedAt: '',
        matchPassword: Function
      }
    addUser(User)
    return redirect("/");
}