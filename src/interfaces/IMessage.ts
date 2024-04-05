/**
 * Defines the IMessage interface.
 * This interface represents a message object with the following properties:
 * - name: a string representing the name of the sender
 * - surname: a number representing the surname of the sender
 * - email: a string representing the email address of the sender
 * - contact: a string representing the contact information of the sender
 * - message: a string representing the content of the message
 * - createdAt: a Date object representing the creation date of the message
 * - updatedAt: a Date object representing the last update date of the message
 */
export interface IMessage {
    name     : string;
    surname  : string;
    email    : string;
    contact  : string;
    message  : string,
    createdAt: Date;
    updatedAt: Date;
};