import { atom } from 'nanostores';
import type { IUser } from '../interfaces/Iuser';

export const $user = atom<IUser[]>([])
/**
 * Adds a user to the $user atom.
 * 
 * @param user - The user object to be added.
 * @returns void
 */
export function addUser(user: IUser) {
    if(user._id !== '' && user._id !== undefined && user._id !== null)
    {
        $user.set([user]);
    }
    else{
        $user.set([]);
    };
};