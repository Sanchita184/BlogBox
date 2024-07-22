import { NewBlog } from "../models/newBlog.models.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await NewBlog.find()
        res.json(posts)
    } catch (error) {
        console.error('Error fetching posts', error)
        res.status(500).send('Internal Server Error')
    }
}