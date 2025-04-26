const bcrypt = require("bcrypt");

// we have to import the model beacus we have to make interction with the databse 

const user = require("../model/user");

// route handler for signup 

async function signup(req, res) {

    try {

        // geting input data 
        const { name, email, password, role } = req.body;

        // if user already exist 
        // for this we have to make DB interection 


        const existingUser = await user.findOne({ email })
        // if user is preset 
        if (existingUser) {
            return res.status(400).json({
                sucess: false,
                message: "User Alreday Exist Please login with @email and Password"
            })

        }

        // hasing the password here i have to definr 2 thigs first one is what we want to hash like {passwors} and how many rounds we have to hash it the optimal is 10 rounds 

        let hashPassword;

        try {
            hashPassword = await bcrypt.hash(password, 10)
        
        }

        catch (error) {

            res.status(500).json({
                sucess: false,
                data: error,
                message: "Getting Problem while hasing the password"
            })

        }
        // if user is not present then make entry into the data base 

        if (!existingUser) {
        
            try{

                const newUser = await user.create({
                    name,
                    email,
                    password: hashPassword,
                    role,
                })


                res.status(200).json({
                    sucess:true,
                    message:"SignUp scuesfully",
                    user:{
                      id:newUser._id,
                      name:newUser.name,
                      email:newUser.email,
                      role:newUser.role,
                      password:newUser.password,
                    }
                })
             console.log("Signup Sucess")  
   
            }
    
            catch(error){
                res.status(500).json({
                    sucess:false,
                    data:error.message,
                })

            }
          
    }



  

}
catch(error) {
    res.status(500).json({
        sucess: false,
        data: error,
        message: "Geeting error while signup"
    })
}

// catch(error) {
//     res.status(500).json({
//         sucess: false,
//         data: error,
//         message: "Geeting error while signup"
//     })
// }
}

module.exports = signup;


