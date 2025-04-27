const post = require("../model/post");



async function createPost (req,res){

    try{

        const {title ,description} = req.body

        // databse intrection 
        const newPost  = await  post.create({
            title,
            description,
        
        }) 

        res.status(200).json({
            sucess:true,
            message:"Post is created"
        })
    }

    catch(error){
        console.log(error)
        res.status(500).json({
            sucess:true,
            message:"geeting error while post"
        })

        

    }

}

// for updating the post 
async function getAllPosts(req ,res){

    try{

        // get all posts 

        const getAllPost = await post.find({});

        res.status(200).json({
            sucess:true,
            data:getAllPost,
            message:"All post get Sucessfully"
        })
       

    }

    catch(error){

        res.status(500).json({
            sucess:false,
            data:error,
            message:"Geeting Error while fetching all the posts "
        })

    }

}



module.exports = {createPost , getAllPosts};