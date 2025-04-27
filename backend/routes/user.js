const express = require("express")
const { getAllPosts } = require("../controller/posts");
const router = express.Router();

// definig route handlers thise are define in controller 

const signUp = require("../controller/authSignUp");
const logIn = require("../controller/authLogin");

// router creaction 

router.post("/login", logIn);
router.post("/signUp", signUp)
router.get("/allPost",getAllPosts)
 
module.exports = router;