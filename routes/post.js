const express = require('express');
const router = express.Router();

const postController = require('../controllers/post');

// a simple test url
router.get('/test', postController.test);

router.put('/', postController.createPost);

router.get('/', postController.getPosts);

router.post('/', postController.updateUpvotes);

module.exports = router;