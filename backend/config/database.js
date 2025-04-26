const mongoose = require("mongoose");
require("dotenv").config();
function databseConnection() {
    // getting Database URl from .env

    // if database is connected

    mongoose.connect(process.env.DB_URL, {

    })

        // data bse connected sucessfully

        .then(() => {

            console.log("data base Connected Sucessfully")
        })

        // if getting any error while connection with the database

        .catch((error) => {
            console.log("Get error while making connection with the data base ")
            console.log(error)
            process.exit(1)

        })
}

module.exports = databseConnection();







