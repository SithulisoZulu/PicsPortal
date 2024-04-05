import type { IMessage } from "@interfaces/IMessage";
import { Message } from "@models/MessageModel";

/**
 * Sends a message using the provided request data.
 * 
 * @param {Request} req - The request object containing the form data.
 * @returns {Promise<IMessage>} - A promise that resolves to the newly created message.
 * @throws {Error} - If any of the required data is missing or if the creation of the message fails.
 */
export const sendMessage = async (req: Request ) => {
    const data    = await req.formData();
    const name    = data.get("name");
    const surname = data.get("surname");
    const contact = data.get("contact");
    const email   = data.get("email");
    const message = data.get("message");

    if(!name || !surname || !contact || !email || !message)
    {
        throw new Error('Missing Data');
    }
  
    const newMessage = await Message.create({ name, surname, contact, email, message });

    if(!newMessage)
    {
        throw new  Error('Failed to send a massage')
    }

    return newMessage;
};

/**
 * Retrieves all messages from the database.
 * 
 * @returns {Promise<IMessage[]>} A promise that resolves to an array of messages.
 */
export const GetMessages = async () => {
    const messages: IMessage[] = await Message.find();
    return messages; 
}