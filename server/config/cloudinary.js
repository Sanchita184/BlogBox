import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
    cloud_name: "dst4663ws",
    api_key: "259867657667347",
    api_secret: "H8cAtleCnggVUk3MGNtmA5IhBvA",
});

export default cloudinary;
