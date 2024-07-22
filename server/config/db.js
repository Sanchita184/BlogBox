import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_URI);
        console.log("CONNECTED!!!");
    } catch (error) {
        console.log("DB connection failed");
    }

}