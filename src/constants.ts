let API_BASE_URL: string  = 'http://localhost:4321/api';
export const SITE_NAME: string = 'PicsPortal';

export const SITE_DESCRIPTION: string = `${SITE_NAME} is a user-friendly online platform designed for enthusiasts, creatives, and professionals alike, offering a vast array of high-quality photos and videos for viewing, saving, and downloading. With an intuitive interface and a diverse collection of visual content, ${SITE_NAME} caters to a wide range of interests and purposes.`;


export const SITE_AUTHOR: string = 'Ocean Of Tech';


export const SITE_CONTENT_SOURCE = `We want to clarify that while you enjoy the visual content on ${SITE_NAME}, it's important to understand that we don't own any of it. The content is sourced from Pexels, a platform renowned for its vast library of images and videos created by talented individuals worldwide. We're here to provide you with a seamless browsing experience, but let's remember to appreciate the hard work and creativity of the content creators. Thanks for being a part of our community.`

if(import.meta.env.ENVIRONMENT === "production")
{
     API_BASE_URL = 'OFFICIAL WEBSITE URL';
}

export { API_BASE_URL } 

export const PHOTOS_PER_PAGE: number = 1000
export const VIDEOS_PER_PAGE: number = 1000

export const links:{}[]= [
     {name: 'Photos', icon: "bi bi-card-image" },
     {name: 'Videos', icon: "fa fa-video-camera"},
     {name: 'Search', icon: "fa fa-search"},
     {name: 'About', icon: "fa fa-info-circle"},
     {name: 'Other'}
]
