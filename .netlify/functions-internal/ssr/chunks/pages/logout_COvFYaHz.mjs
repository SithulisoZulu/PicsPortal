import { l as logout } from './login_Dp3SF06S.mjs';
import { i as addUser } from './404_CwdhM6EV.mjs';

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
    matchPassword: Function
  };
  addUser(User);
  return redirect("/");
};

export { GET };
