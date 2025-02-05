import express from 'express'
const router = express.Router();

import sendPost from '../controllers/postController.js'

// models
import Categorie from '../models/Categorie.js'

// User home
router.get('/', async (req, res) => {
    const userName = req.userName
    res.render('user/index.hbs', { userName });
});

// Send post
router.get('/post/add', async (req, res) => {
    const userName = req.userName
    const categories = await Categorie.find().lean();
    res.render('user/addPost', { categories, userName });
});

router.post('/post/add', sendPost);


export default router