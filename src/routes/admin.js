const express = require("express");
const app = express();
const path = require('path')

app.get("/admin/login" , ( req, res ) => {
  res.sendFile('loginAdmin.html', {root :  path.join(__dirname , '../public/views')});
});

app.post("/admin/login" , ( req, res ) => {

  if( req.body.email == "1" && req.body.password == "1" ){
    res.send('Pd445fDa54')
  }else{
    res.send(false)
  }
  
});



app.get("/admin" , ( req, res ) => {
  let token = req.query.token;
  if( token == 'Pd445fDa54' ){
    res.sendFile('admin.html', {root :  path.join(__dirname , '../public/views')});
  }else{
    res.redirect('/admin/login')
  }
    
});

module.exports = app;
