//function for adding user login and signup 

const user = require("../model/userSchema");

async function signup(req, res) {

    try {
        const { email, password, role } = req.body

        const existingUser = await user.findOne({ email });

        if (existingUser) {
            return res.status(500).json({
                sucess:false,
                message:"User already register please login "
            })
           
        }

         const newUser =  new user({
                email,
                password,
                role
            })
            // save user data to the data base 
            await newUser.save(); 
            console.log(newUser)

            res.status(200).json({
                sucess: true,
                message: "Your Are loged  in "
            })

    
        

        // makig Data base entry 


    } catch (error) {
        console.log(error)
        res.status(500).json({
            sucess: false,
            message: "There is any Error whhile sign in ",
            data: error
        })

    }


}

async function login(req, res) {
    try {

        const { email, password, role } = req.body

        const existuser = await user.findOne({ email });

        if (!existuser) {
           return res.status(500).json({
                sucess: false,
                message: "User Not exist please login !"
            })
        }
        if (existuser.role !== role) {
          return res.status(500).json({
                sucess: false,
                message: "Your are not authorized with this role "
            })
        }

        const login_users = new user({
            email,
            password,
            role,
        })
        console.log(login_users)
        res.status(200).json({
            sucess: true,
            message: `You are login and with role ${role}`,
            data: login_users
        })
    } catch (error) {

        res.status(500).json({
            sucess: false,
            message: "Getting Error While login ",
            data: error
        })

    }
}

module.exports = { signup, login }