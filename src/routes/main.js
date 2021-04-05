const express = require('express');
const app = express()
const path = require('path'); 

app.get( "/" , ( req, res ) => {
  res.sendFile('index.html', {root :  path.join(__dirname , '../public')}); //Cuando no se utliza ningun motor de plantilla lo hacemos asi
})

app.post("/" , ( req , res ) => {
    let body = req.body;
    console.log(body);
});

module.exports = app;

