import { Schema, model } from 'mongoose';
import type { IMessage } from '@interfaces/IMessage';

const messageSchema = new Schema<IMessage>({
  name   : { type: String, required: true },
  surname: { type: String, required: true },
  email  : { type: String, required: true },
  contact: { type: String, required: true },
  message: { type: String, required: true },
}, {
  timestamps: true
});

/**
 * Creates a model for the 'Message' collection using the 'messageSchema' schema.
 * 
 * @param {IMessage} - The interface representing the structure of the message document.
 * @returns {Model<IMessage>} - The model for the 'Message' collection.
 */
export const Message = model<IMessage>('Message', messageSchema);