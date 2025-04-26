const express = require("express");
const db_connect = require("./config/database")

const app = express();

// getting the port from .env
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// adding middlerware 
app.use(express.json());



// databse connection function call
db_connect;


// route import and mouts 
const user = require("./routes/user")

app.use("/api/v1", user )

// server activate

app.listen(PORT , () =>{
    console.log(`Your server is started at ${PORT}`)
});
