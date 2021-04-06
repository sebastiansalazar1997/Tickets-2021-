const express = require('express');
const app = express()
const path = require('path'); 


app.get( "/contacts" , ( req, res ) => {
    res.render('contacts.html', {root :  path.join(__dirname , '../public/views')}); //Cuando no se utliza ningun motor de plantilla lo hacemos asi
})

app.post("/contacts" , ( req , res ) => {
    let body = req.body
    console.log(body);
})
  
module.exports = app;
