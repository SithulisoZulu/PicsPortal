import { c as connectDB } from './_id__B1z_eaf2.mjs';
import { u as update, g as getUser } from './login_BLeiluGC.mjs';
import { i as addUser } from './404_Bp5o1INs.mjs';

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
