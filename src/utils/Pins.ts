import { PHOTOS_PER_PAGE } from "../constants";
import { client } from "../pexels/client";

export const getPins = async () => {

  try {        
    return await client.photos.curated({ per_page: PHOTOS_PER_PAGE });
  } catch (error) {
    console.log(error)
  }

}