import { API_BASE_URL } from "../constants";
import { $user } from '../store/userStore';
export const getLikes = async () => {
    if($user?.value && $user?.value?.length > 0) {
        const res = await fetch(`${API_BASE_URL}/likes/getUserLikes.json`);
        if(res.ok)
        { 
            return  await res.json();
        }
        else
        {
            return new Response(`Failed to get user likes ${JSON.stringify(res)}`)
        }
    }
};