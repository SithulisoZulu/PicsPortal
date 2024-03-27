import mongoose from "mongoose";

/**
 * Function: connectDB
 * 
 * Description:
 * This function connects to a MongoDB database using the provided connection string.
 * It returns a boolean value indicating whether the connection was successful or not.
 * If the connection is successful, it logs a message with the host of the connected database.
 * If an error occurs during the connection, it logs the error message and returns false.
 * 
 * Returns:
 * - boolean: True if the connection was successful, false otherwise.
 */
const connectDB = async () => {
    try {
        const connection =  await mongoose.connect(import.meta.env.CONNECTION_STRING);
        console.log(`MongoDB Connected: ${connection.connection.host}`);
        return true
    } catch (error) {
        console.error(`Error: ${error}`);
        return false;
    };
};

export default connectDB;