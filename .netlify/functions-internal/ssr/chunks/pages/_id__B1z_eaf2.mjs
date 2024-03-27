import { d as $user } from './404_Bp5o1INs.mjs';
import mongoose, { Schema, model } from 'mongoose';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect("mongodb+srv://oceanoftech:UgAkF3RbGGFAQHQC@picsportal.qhqroqo.mongodb.net/PicsPortal?retryWrites=true&w=majority&appName=PicsPortal");
    console.log(`MongoDB Connected: ${connection.connection.host}`);
    return true;
  } catch (error) {
    console.error(`Error: ${error}`);
    return false;
  }
};

const likeSchema = new Schema({
  userId: { type: String, required: true },
  photoUrl: { type: String, required: true },
  photoId: { type: String, required: true }
}, {
  timestamps: true
});
const Like = model("Like", likeSchema);

const likeImage = async (req, userId) => {
  const data = await req.json();
  const photoUrl = data.url;
  const photoId = data.id;
  const image = await Like.create({ userId, photoUrl, photoId });
  if (!image) {
    return new Response("User not created", { status: 400 });
  }
  return image;
};
const getUserLikes = async (userId) => {
  return await Like.find().where("userId").equals(userId).sort("-createdAt");
};
const deleteLike = async (id) => {
  if (!id)
    return new Response("Invalid request", { status: 400 });
  return await Like.findByIdAndDelete(id);
};

const DELETE = async ({ redirect, params }) => {
  if (!$user?.value || $user.value.length === 0) {
    return redirect("/auth");
  }
  const connection = await connectDB();
  if (!connection) {
    return new Response("Failed to connect to the database", { status: 503 });
  }
  const id = params.id;
  const like = await deleteLike(id);
  if (!like) {
    return new Response(JSON.stringify({ message: "No such like found" }), { status: 404 });
  }
  return new Response(JSON.stringify({
    message: like,
    status: 200
  }));
};

const _id__json = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    DELETE
}, Symbol.toStringTag, { value: 'Module' }));

export { _id__json as _, connectDB as c, getUserLikes as g, likeImage as l };
