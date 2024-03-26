import cloudinary from 'cloudinary'
// import { $image } from '../store/imageBlobStore';

// export const imageBlob = async (image: File) => {

//     cloudinary.v2.uploader.upload(image, {upload_preset: import.meta.env.CLOUD_NAME}, (error, result)=>{
//         if(error){
//             if(import.meta.env.ENVIRONMENT === "development"){
//                 console.log(error);
//             }
//             else{
//                 return new Error("Something went wrong")
//             }
//         }

//         try {
//             const image = result?.info.url
//            ;
//         } catch (error) {
//             if(import.meta.env.ENVIRONMENT === "development"){
//                 console.log(error)
//             }
//             else{
//                 return new Error("Something went wrong")
//             }
//         }
//     });
// };



export const fileUpload =  async (image: any) =>  {
    cloudinary.v2.uploader.upload(image, {upload_preset: import.meta.env.CLOUD_NAME}, (error, result)=>{
        console.log(result, error);
        return result
  });
}