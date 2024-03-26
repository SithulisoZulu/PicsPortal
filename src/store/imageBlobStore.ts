// store/imageBlobStore.ts
import { atom } from 'nanostores';

export const $image = atom<string>('')
const addImage = async (url: string) => {
    try {
        $image.set(url);
        console.log("added", $image.value)
        return($image.value)
    } catch (error) {
        console.log(error)
    }
}

export default addImage
