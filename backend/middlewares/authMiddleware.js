const JWT  = require("jsonwebtoken");
require("dotenv").config();
function varifyAdmin(req ,res ,next){
// getting token beacuse only admin can perform some action 
    const token = req.cookies.admin_cookies;


    if(!token){
        return res.status(401).json({
            sucess:false,
            message:"You are not a admin ",
            token
            
        })
    }

    // verify the token while using JWT secret key 

  

    try{
        const varifyKey = JWT.verify(token ,process.env.JWT_KEY);

        if (varifyKey.role !== "admin"){
            return res.status(403).json({
                sucess:false,
                message:"Your are not a admin access denied "
            })
        }

        // alow the request for proceed

        next();

    }

    catch(error){
        res.status(401).json({
            sucess:false,
            message:"invalid or Token expire "
        })
    }



}

module.exports = varifyAdmin;