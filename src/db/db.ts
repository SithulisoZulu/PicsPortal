import mongoose from "mongoose";

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