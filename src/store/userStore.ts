import { atom } from 'nanostores';
import type { IUser } from '../interfaces/userInterface';

export const $user = atom<IUser[]>([])
/**
 * Adds a user to the $user atom.
 * 
 * @param user - The user object to be added.
 * @returns void
 */
export function addUser(user: IUser) {
    $user.set([user]);
}