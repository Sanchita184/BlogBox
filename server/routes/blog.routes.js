import express from 'express';
import multer from 'multer';
import { submitForm } from '../controllers/createPost.controllers.js';
import { getPosts } from '../controllers/getPosts.controllers.js'

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/submit-form', upload.single('image'), submitForm);
router.get('/posts', getPosts)

export default router;
