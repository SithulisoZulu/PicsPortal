import mongoose, { connect }  from "mongoose";

const connectDB = async () => {
    try {
        const connection =  await mongoose.connect(import.meta.env.CONNECTION_STRING);
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};

export default connectDB;