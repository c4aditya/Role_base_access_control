const express = require("express");
const db_connect = require("./config/database")
const cookieParser = require('cookie-parser');
const cors = require("cors")
const app = express();

// getting the port from .env
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(cors());

const corsOptions = {
    origin: "*", 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ["*"] 
  };

  app.use(cors(corsOptions));

// adding middlerware 
app.use(express.json());
app.use(cookieParser());



// databse connection function call
db_connect;


// route import and mouts 
const user = require("./routes/user");

app.use("/api/v1", user );

// router for admin 

const admin = require("./routes/admin");
app.use("/api/v1",admin);

// server activate

app.listen(PORT , () =>{
    console.log(`Your server is started at ${PORT}`)
});
