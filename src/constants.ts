let API_BASE_URL: string  = 'http://localhost:4321/api';
export const SITE_NAME: string = 'PicsPortal';

export const SITE_DESCRIPTION: string = 'Portal description';

export const SITE_URL: string = 'XXXXXXXXXXXXXXXXXXXXX';

export const SITE_AUTHOR: string = 'XXXXXXXXXXXXXXXXXXXXX';

export const SITE_AUTHOR_URL: string = 'XXXXXXXXXXXXXXXXXXXXX';

if(import.meta.env.ENVIRONMENT === "production")
{
     API_BASE_URL = 'OFFICIAL WEBSITE URL';
}

export { API_BASE_URL } 



export const PHOTOS_PER_PAGE: number = 80
export const VIDEOS_PER_PAGE: number = 80