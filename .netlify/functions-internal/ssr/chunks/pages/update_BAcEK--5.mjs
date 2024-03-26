import { c as connectDB } from './_id__D0RxJNJh.mjs';
import { u as update, g as getUser } from './login_Dp3SF06S.mjs';
import { i as addUser } from './404_CwdhM6EV.mjs';

connectDB();
const POST = async ({ request, redirect }) => {
  const data = await request.formData();
  const email = data.get("email")?.toString();
  const user = await update(data).then((data2) => data2).catch((error) => console.log(error));
  if (!user) {
    throw new Error("Something went wrong while updating the user");
  }
  const updatedUser = await getUser(email);
  addUser(updatedUser);
  return redirect(`/profile/${updatedUser?._id}`);
};

export { POST };
