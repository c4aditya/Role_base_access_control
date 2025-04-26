const bcrypt = require("bcrypt")
const User = require("../model/user")
const JWT = require("jsonwebtoken");

require("dotenv").config();

async function logIn(req, res) {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                sucess: false,
                message: "Fill email and password"
            })
        }

        // check user is signup or not 

        const user = await User.findOne({ email })

        // if user is not registered

        if (!user) {
            console.log("User is not registerd")
            return res.status(401).json({
                sucess: false,
                message: "User is not registered",
            })
        }

        // if user is registered 

      
        // creatign a paylode for JWT
        const paylode = {
            email: user.email,
            id: user._id,
            role: user.role,
        }

          // varify password and genetate JWT tokens 

        if (await bcrypt.compare(password, user.password)) {

            // if password match then login 
            // create a token 
            // for creating a token it will take 2 things 1- paylode 2 -JWT_tokem [define at .env ]
            let token = JWT.sign(paylode,
                process.env.JWT_KEY,
                // creating an options
                {
                    expiresIn: "2h",
                }
            );

            user.token = token;
            user.password = undefined;

            // options for cookies
            const options = {
            expires: new Date (Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly:true,
            }

            // creting a cookie
             res.cookie("token" ,token ,options).status(200).json({
                sucess:true,
                token,
                user,
                message:"User login Sucessfully"
             })

             console.log("Your are loged in")
        } 
        // if password not match 
        else {

            res.status(403).json({
                sucess: false,
                message: "password is incorrect",
            })
        }

    }

    catch (error) {
     console.log(error)
        res.status(500).json({
            sucess: false,
            message: "Login not working"
        })

    }
}

module.exports = logIn;