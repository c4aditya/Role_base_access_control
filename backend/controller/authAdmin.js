const User = require("../model/user")
const bcrypt =require("bcrypt")
const JWT = require("jsonwebtoken");


require("dotenv").config();
async function adminLogin(req ,res){

    try{

        const {email ,password ,role} = req.body;

        // validation if email or password or role is empty
        if(!email || !password || !role){
 
            console.log("empty feilds error ");
            
            return res.status(401).json({
                sucess:true,
                message:"Require to fill all the feilds"

            })
        }

        // if all feilds fill correctly then match email is present in databse or not 
       const admin = await User.findOne({email})

       if(!admin){
        console.log("admin email not found ")
        return res.status(500).json({
            sucess:false,
            message:"email not found"
        })
       }

       // if admin email is found then hash the password 

       // creating a paylode 
       const payload = {
           emain:admin.email,
           password:admin.password,
           role:admin.role,
       }

       if(await bcrypt.compare(password , admin.password)) {

        // now we have to create the JWT tokens 
        let token = JWT.sign(payload , 
                      process.env.JWT_KEY,
                      {
                        expiresIn :"2h"
                      }
        )
        admin.token = token;
        admin.password = undefined;

           // options for cookies
           const options = {
            expires: new Date (Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly:true,
            sameSite: "lax", // "none" karo agar HTTPS pe ho
            secure: false
            }

              // creting a cookie
              res.cookie("admin_cookies" , token , options).status(200).json({
                sucess:true,
                token,
                admin,
                message:"Admin login Sucessfully"
             })

       }

      

             console.log("Admin Login sucess");

    }

    catch(error){
        console.log(error)
        res.status(500).json({
            sucess:false,
            message:"Geting error while admin login "
        })

    }
}


module.exports = adminLogin;