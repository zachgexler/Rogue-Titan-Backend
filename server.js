const express = require('express');
const path = require('path');
const routes = require('./routes');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(routes);

app.listen(PORT, () => console.log("Listening on localhost " + PORT));

