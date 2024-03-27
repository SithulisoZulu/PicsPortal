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