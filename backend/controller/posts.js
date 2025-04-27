const post = require("../model/post");



async function createPost(req, res) {

    try {

        const { title, description } = req.body

        // databse intrection 
        const newPost = await post.create({
            title,
            description,

        })

        res.status(200).json({
            sucess: true,
            data:newPost,
            message: "Post is created"
        })
    }

    catch (error) {
        console.log(error)
        res.status(500).json({
            sucess: true,
            message: "geeting error while post"
        })



    }

}

// for geeting all  the post 

async function getAllPosts(req, res) {

    try {

        // get all posts 

        const getAllPost = await post.find({});

        res.status(200).json({
            sucess: true,
            data: getAllPost,
            message: "All post get Sucessfully"
        })


    }

    catch (error) {

        res.status(500).json({
            sucess: false,
            data: error,
            message: "Geeting Error while fetching all the posts "
        })

    }

}


// geting a single post 

//console.log("make entry single post ")
async function getSinglePost(req, res) {

    console.log("Inside the getSingle post");
  
    try {
        // extractig the id 
      
        const id = req.params.id;
        // extracting the items 
        const getSinglePost = await post.findById({_id : id} );

         // its only check the id formate like in mongobd id are in 24 charactrers then if the cheracters is 24 but with matching character there are no object then this if blck is run 
       
        if (!getSinglePost) {

          return  res.status(401).json({
                sucess: false,
                message: "Not valid ID",

            })
        }
        res.status(200).json({
            sucess: true,
            data: getSinglePost,
            message: "Geting single Post with matching ID"
        })
    }

    catch (error) {

        res.status(500).json({
            sucess: false,
            data: error,
            message: "Getting error while Fetching Single Post"
        })

    }
}

// console.log("last line")


// dekete a singePost 

console.log("outside the deleting post ")
async function deletingPost(req , res){

    console.log("inside the deleting post")

    try{

        const id = req.params.id;

        const deletePost = await post.findByIdAndDelete({_id : id});
 // its only check the id formate like in mongobd id are in 24 charactrers then if the cheracters is 24 but with matching character there are no object then this if blck is run 
       
        if(!deletePost){

            res.status(401).json({
                sucess:false,
                message:"Id not found"
            })
        }

        res.status(200).json({
            sucess:true,
            message:"Post is deleted"
        })

    }

    catch(error){

        res.status(500).json({
            sucess:true,
            message:"Delete post Now workign"
        })

    }
}


// update the single post 

async function updatePost(req , res){

    // for this we use find by id and update 
    try{

        const id = req.params.id;

        const {title , description} = req.body

        const updatePost = await post.findByIdAndUpdate({_id : id} , {title , description , createdAt : Date.now()})
       // its only check the id formate like in mongobd id are in 24 charactrers then if the cheracters is 24 but with matching character there are no object then this if blck is run 

        if(!updatePost){
            return res.status(500).json({
                sucess:false,
                message:"Your Id is invalid please provide me the valid id "
            })
        }

        res.status(200).json({
            sucess:true,
            data:updatePost,
            message:`Your post is updated for this ${id} `
        })

        

    }

    catch(error){

        res.status(500).json({
            sucess:false,
            message:"Update Post is not working",
        })

    }
}


module.exports = {createPost, getAllPosts, getSinglePost , deletingPost , updatePost};