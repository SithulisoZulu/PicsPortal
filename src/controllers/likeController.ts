import { Like } from "../models/likeModel";

/**
 * Creates a new like for an image.
 * 
 * @param {Request} req - The request object.
 * @param {string} userId - The ID of the user who liked the image.
 * @returns {Promise<Like | Response>} - A promise that resolves to the created like object or a response object with an error message.
 */
export const likeImage = async (req: Request, userId: string) => {
  const data = await req.formData();
  const photoUrl = data.get("photoUrl")?.valueOf();
  const photoId = data.get("photoId")?.valueOf();

  const image = await Like.create({userId, photoUrl, photoId})

  if(!image){
      return new Response("User not created", {status: 400});
  };
    
  return image;
};

/**
 * Retrieves the likes of a user.
 * 
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Like[]>} - A promise that resolves to an array of Like objects representing the user's likes.
 */
export const getUserLikes = async(userId: string) => { 
 return await Like.find().where('userId').equals(userId).sort('-createdAt');
};

export const deleteLike = async(request: Request) => {
  const data = await request.formData();
  const likeId = data.get("likeId")?.valueOf();

  if(!likeId) return new Response("Invalid request", {status: 400});

  return await Like.findByIdAndDelete(likeId);
}
