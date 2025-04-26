const express = require("express")

const router = express.Router();

// definig route handlers thise are define in controller 

const signUp = require("../controller/authSignUp")

// router creaction 

// router.post("/login", logIn);
router.post("/signUp", signUp)
 
module.exports = router;