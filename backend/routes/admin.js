const express = require("express");
const veriftAdmin = require("../middlewares/authMiddleware")
const {createPost , getAllPosts , getSinglePost} = require("../controller/posts")
const router = express.Router();

const admin = require("../controller/authAdmin");

router.post("/adminLogin" , admin);

router.post("/createPost", veriftAdmin , createPost);
router.get("/getAllPosts", veriftAdmin , getAllPosts);
router.get("/singlePost/:id" , veriftAdmin ,getSinglePost);



module.exports = router;