const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const Categories = require("../models/Category");
const mongoose = require("mongoose");
const toId = mongoose.Types.ObjectId;

//Create Post
router.post("/", async(req,res)=>{
    const newPost = new Post(req.body);
    
    try{
        // const user = await User.findById(req.body.userId)
        const savedPost = await newPost.save();        
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }    
    
});

// Update Post
router.put("/:id", async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.userId){
        try{

            const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                $set: req.body
            },{new: true});
            res.status(200).json(updatedPost);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(401).json("You are not authorized to edit this post");
    }

    }catch(err){
        res.status(500).json(err);
    }
    
});

//Delete Post
router.delete("/:id", async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        const user = await User.findById(post.userId);
        if(user.username === req.body.username){
        try{
            await post.delete();
            res.status(200).json("Post has been Deleted!");
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(401).json("You are not authorized to edit this post");
    }

    }catch(err){
        res.status(500).json(err);
    }
    
});

//Get Post
router.get("/:id", async(req,res) =>{
    try{
        const post = await Post.findById(req.params.id);
        const user = await User.findById(toId(post.userId));
        const {password, ...others} = user._doc;
        res.status(200).json({post,others});
    }catch(err)
    {
            res.status(500).json(err);
    }
})

//Get all posts
router.get("/", async(req,res) =>{
    const username = req.query.user;
    const catName = req.query.cat

    try{
        let posts;
        if(username){
            posts = await Post.find({username})
        }else if(catName){
            posts = await Post.find({categories: {
                $in:[catName]
            }})
        }else{
            posts = await Post.find();
        }
        res.status(200).json(posts);
    }catch(err)
    {
            res.status(500).json(err);
    }
})


module.exports = router;