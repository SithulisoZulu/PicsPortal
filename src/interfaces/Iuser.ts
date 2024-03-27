/**
 * Interface representing a user.
 * 
 * @property _id - The unique identifier of the user.
 * @property name - The name of the user.
 * @property email - The email address of the user.
 * @property password - The password of the user.
 * @property createdAt - The date and time when the user was created.
 * @property updatedAt - The date and time when the user was last updated.
 * @property matchPassword - A function to match the user's password.
 */
export interface IUser {
  _id          : string;
  name         : string;
  email        : string;
  password     : string;
  createdAt    : any,
  updatedAt    : any
  matchPassword: Function
};