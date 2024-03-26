import { c as connectDB, l as likeImage } from './_id__D0RxJNJh.mjs';
import { c as $user } from './404_CwdhM6EV.mjs';

const POST = async ({ request, redirect }) => {
  if (!$user?.value || $user.value.length === 0 || $user.value[0]._id === "") {
    return redirect("/auth");
  }
  console.log($user);
  const connection = await connectDB();
  if (!connection) {
    return new Response("Failed to connect to database", { status: 500 });
  }
  const like = await likeImage(request, $user.value[0]._id.toString());
  if (!like) {
    console.log("failed to like pin");
  }
  return new Response(JSON.stringify({
    message: like,
    status: 200
  }));
};

export { POST };
