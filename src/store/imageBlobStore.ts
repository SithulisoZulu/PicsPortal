// store/imageBlobStore.ts
import { atom } from 'nanostores';
import type { Iimage } from '../interfaces/IimageBlob';const image: Iimage = {
  file: 'image.jpg',
  name: 'Image Name'
};



export const $image = atom<Iimage>(image)

export const addImage = async (image: Iimage) => {
    try {
        $image.set(image);
        console.log("added", $image.value)
    } catch (error) {
        console.log(error)
    }
}
