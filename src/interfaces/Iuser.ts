/**
 * This code snippet defines an interface called IUser. 
 * The IUser interface has four properties: _id, name, email, and password, all of which are of type string. 
 * This interface can be used to define the structure of objects that represent users in a TypeScript application.
 */
export interface IUser {
  _id          : string;
  name         : string;
  email        : string;
  password     : string;
  createdAt    : Date,
  updatedAt    : Date
  matchPassword: Function
};