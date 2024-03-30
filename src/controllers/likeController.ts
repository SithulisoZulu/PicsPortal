import type { ILike } from "@interfaces/ILike";
import { Like } from "@models/likeModel";

/**
 * Creates a new like for an image.
 * 
 * @param req - The request object.
 * @param userId - The ID of the user who is liking the image.
 * @returns A promise that resolves to the created like object or a response object.
 */
export const likeImage = async (req: Request, userId: string): Promise<ILike | Response> => {
  const data = await req.json();

  const photoUrl = data.url;
  const photoId = data.id;

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

export const deleteLike = async(id: string) => {
  if(!id) return new Response("Invalid request", {status: 400});
  return await Like.findByIdAndDelete(id);
}