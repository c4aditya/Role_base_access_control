const express = require("express");
const veriftAdmin = require("../middlewares/authMiddleware")
const {createPost , getAllPosts} = require("../controller/posts")
const router = express.Router();

const admin = require("../controller/authAdmin");

router.post("/adminLogin" , admin);

router.post("/createPost", veriftAdmin , createPost);
router.get("/getAllPosts", veriftAdmin , getAllPosts);



module.exports = router;