const express = require('express');
const app = express()
const path = require('path'); 
const Router = express.Router()
const { regitrarUsuarios } = require("../database")
app.set('views', path.resolve(__dirname, '../public/views'));


app.get( "/" , ( req, res ) => {
  console.log("dentro");
  res.sendFile('index.html', {root :  path.join(__dirname , '../public')}); //Cuando no se utliza ningun motor de plantilla lo hacemos asi
})


module.exports = app;

