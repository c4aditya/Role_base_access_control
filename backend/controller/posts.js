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
      
        const id = req.params.id
        // extracting the items 
        const getSinglePost = await post.findById(id );
        if (!getSinglePost) {

            res.status(401).json({
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




module.exports = {createPost, getAllPosts, getSinglePost};