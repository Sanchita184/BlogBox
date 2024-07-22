import { NewBlog } from '../models/newBlog.models.js'
import cloudinary from '../config/cloudinary.js';

export const submitForm = async (req, res) => {
    try {
        const { title, description } = req.body;
        const image = req.file;
        const result = await cloudinary.uploader.upload(image.path);
        const newBlog = new NewBlog({
            imageUrl: result.secure_url,
            title,
            description,
        });
        console.log(newBlog)

        await newBlog.save();

        res.send('Form submitted successfully');
    } catch (error) {
        console.error('Error uploading image or saving data', error);
        res.status(500).send('Internal Server Error');
    }
};
