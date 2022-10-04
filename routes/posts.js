const express = require ('express');
const router = express.Router();
const Post = require('../models/Post'); 

// display all the posts in json format
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err}); 
    }
});

// submit a post and display (Postman)
router.post('/', async (req, res) => {
    const post = new Post ({
        full_name: req.body.full_name,
        d_o_b: req.body.d_o_b,
        blood_type: req.body.blood_type,
        mobile: req.body.mobile,
        township: req.body.township
    });
    try {
    const savedPost = await post.save();
    res.json(savedPost); 
    } catch(err) {
        res.json({message: err}); 
    }
});

//search by ID (Postman)
router.get('/:postId', async (req, res) => {
    try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
    } catch(err) {
        res.json({ message: err }); 
    }
});

// delete a post (Postman)
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({ _id: req.params.postId })
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    } 
});

// updata a Post Title (Postman)
router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne({ _id: req.params.postId },
                                                {$set: { mobile: req.body.mobile }});
        res.json(updatedPost); 
    } catch (err) {
        res.json({ message: err }); 
    }
})

module.exports = router; 