import mongoose from "mongoose";

const newBlogSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const NewBlog = mongoose.model('NewBlog', newBlogSchema)
