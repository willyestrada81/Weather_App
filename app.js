const express = require('express');
const ejs = require('ejs');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


//EJS
app.set("view engine", "ejs");

//BBODY PARSER - NEEDED TO READ FROM FORMS
app.use(express.urlencoded({ extended: false }));

//EXPRESS TO SERVE STATIC FILES
app.use(express.static("public"));



//ROUTES --- NEED TO BE PLACED BELLOW THE ABOVE CONFIGURATION
app.use('/', require('./routes/index')); //IMPORT ROUTES FROM THE INDEX.JS FILE IN THE ROUTER FOLDER


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`) 
})