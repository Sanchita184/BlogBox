import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://benediction:v8LlMUR76Q8ZJhfX@cluster0.fkcmqjl.mongodb.net/");
        console.log("CONNECTED!!!");
    } catch (error) {
        console.log("DB connection failed");
    }

}