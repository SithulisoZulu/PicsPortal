import { c as connectDB } from './_id__D0RxJNJh.mjs';
import { r as register } from './login_Dp3SF06S.mjs';

connectDB();
const POST = async ({ cookies, request, redirect }) => {
  const user = await register(cookies, request).then((data) => data).catch(() => null);
  if (user?.status === 500 || user === null) {
    return redirect(`/error/${"register"}`);
  }
  return redirect("/welcome");
};

export { POST };
