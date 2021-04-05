const express = require('express');
const app = express()
const path = require('path'); 


app.get( "/about-us" , ( req, res ) => {
    res.sendFile('about-us.html', {root :  path.join(__dirname , '../public/views')}); //Cuando no se utliza ningun motor de plantilla lo hacemos asi
})

app.post("/contacts" , ( req , res ) => {
    let body = req.body
    console.log(body);
})
  
module.exports = app;
