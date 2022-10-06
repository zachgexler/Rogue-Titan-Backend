// DEPENDENCIES
// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 4949
// pull MONGODB_URL from .env
const { PORT = 5959, MONGODB_URL } = process.env;
// import express
const express = require('express');
// create application object
const app = express();
// import mongoose
const mongoose = require("mongoose");
// import path
const path = require('path');
// import routes
const routes = require('./routes');

// const db = require("./config/connection")
// import middleWare
const cors = require("cors");
const morgan = require("morgan");

// DATABASE CONNECTION
////////////////////////////////
// Establish Connection
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });



  // Connection Events
mongoose.connection
.on("open", () => console.log("You are connected to mongoose"))
.on("close", () => console.log("You are disconnected from mongoose"))
.on("error", (error) => console.log(error));



// MiddleWare
////////////////////////////////
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies
app.use(routes);



  // LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));