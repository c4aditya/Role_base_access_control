const express = require("express");
const veriftAdmin = require("../middlewares/authMiddleware")
const {createPost , getAllPosts , getSinglePost ,deletingPost,updatePost} = require("../controller/posts")
const router = express.Router();

const admin = require("../controller/authAdmin");

router.post("/adminLogin" , admin);
// end point for creating a post 
router.post("/createPost", veriftAdmin , createPost);
// end point for get al the post 
router.get("/getAllPosts", veriftAdmin , getAllPosts);
// end point for get single post
router.get("/singlePost/:id" , veriftAdmin ,getSinglePost);
// end poisnt for deleting single post 
router.delete("/deletePost/:id" , veriftAdmin  , deletingPost);
// end point for update all the post 
router.put("/updatePost/:id", veriftAdmin , updatePost)


module.exports = router;