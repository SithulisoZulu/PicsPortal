/**
 * Interface representing the structure of IVideoPins.
 * 
 * @interface IVideoPins
 * @property {Array} video_files - Array of video files.
 * @property {number} video_files[].id - The ID of the video file.
 * @property {number} video_files[].width - The width of the video file.
 * @property {number} video_files[].height - The height of the video file.
 * @property {any} video_files[].duration - The duration of the video file.
 * @property {string} video_files[].full_res - The full resolution of the video file.
 * @property {Array} video_files[].tags - Array of tags associated with the video file.
 * @property {string} video_files[].url - The URL of the video file.
 * @property {string} video_files[].image - The image associated with the video file.
 * @property {object} video_files[].user - The user associated with the video file.
 * @property {string} video_files[].user.id - The ID of the user.
 * @property {string} video_files[].user.name - The name of the user.
 * @property {string} video_files[].user.url - The URL of the user.
 * @property {Array} video_files[].video_files - Array of video files.
 * @property {string} video_files[].video_files[].id - The ID of the video file.
 * @property {string} video_files[].video_files[].quality - The quality of the video file.
 * @property {string} video_files[].video_files[].file_type - The file type of the video file.
 * @property {number} video_files[].video_files[].width - The width of the video file.
 * @property {number} video_files[].video_files[].height - The height of the video file.
 * @property {number} video_files[].video_files[].fps - The frames per second of the video file.
 * @property {string} video_files[].video_files[].link - The link to the video file.
 * @property {Array} video_files[].video_pictures - Array of video pictures.
 * @property {string} video_files[].video_pictures[].id - The ID of the video picture.
 * @property {number} video_files[].video_pictures[].nr - The number of the video picture.
 * @property {string} video_files[].video_pictures[].picture - The picture associated with the video picture.
 */
export interface IVideoPins {
    video_files: [
        {
            id      : number;
            width   : number;
            height  : number;
            duration: any;
            full_res: string,
            tags    : [];
            url     : string;
            image   : string;

            user    : {
                id  : string;
                name: string;
                url : string
            }

            video_files: [
                {
                    id       : string;
                    quality  : string;
                    file_type: string;
                    width    : number;
                    height   : number;
                    fps      : number;
                    link     : string
                }
            ]

            video_pictures: [
                {
                id     : string;
                nr     : number;
                picture: string
                }
            ]
        }
    ]
}