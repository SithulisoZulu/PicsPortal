import { l as logout } from './login_BLeiluGC.mjs';
import { i as addUser } from './404_Bp5o1INs.mjs';

const GET = async ({ cookies, request, redirect }) => {
  const jwToken = await logout(cookies);
  if (jwToken) {
    return new Response("token found", { status: 400 });
  }
  const User = {
    _id: "",
    name: "",
    email: "",
    password: "",
    createdAt: "",
    updatedAt: "",
    matchPassword: Function
  };
  addUser(User);
  return redirect("/");
};

export { GET };
