import type { APIRoute } from "astro";
import { client } from "../../../../backend/pexels/client";
import { PHOTOS_PER_PAGE } from "../../../../constants";

export const GET: APIRoute = async ({ request }) => { 
    // Get the user's IP address.
    const photos = await client.photos.curated({ per_page: PHOTOS_PER_PAGE });

    if(!photos ){
        return new Response("Error fetching data");
    }

    return new Response(JSON.stringify(photos));
};