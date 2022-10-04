// DEPENDENCIES
const express = require('express');
const path = require('path');
const routes = require('./routes');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001
// MiddleWare
////////////////////////////////
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // parse json bodies



app.use(routes);

app.listen(PORT, () => console.log("Listening on localhost " + PORT));

