const express = require("express");
const { join } = require("path");
const app = express();
const path = require('path');
const { registrarTerminal , getTerminales , getCooperativas } = require('../database')

app.get("/admin/login" , ( req , res ) => {
  res.sendFile('loginAdmin.html', {root :  path.join(__dirname , '../public/views')});
});

app.post("/admin/login" , ( req, res ) => {

  if( req.body.email == "1" && req.body.password == "1" ){
    res.send('Pd445fDa54')
  }else{
    res.send(false)
  }
  
});


/* ======================================================= */
/* ======================================================= */
/* ======================================================= */

app.get("/admin" , ( req, res ) => {
  let token = req.query.token;
  if( token == 'Pd445fDa54' ){
    res.sendFile('admin.html', {root :  path.join(__dirname , '../public/views')});
  }else{
    res.redirect('/admin/login')
  }
});

app.post("/admin/admin/terminal" , ( req, res ) => {
    let terminal = JSON.parse(JSON.stringify(req.body))
    registrarTerminal( terminal.nombre )
    .then( x => {
      console.log( x , 'aquiiiiiii' );
    } )

    
    
    res.redirect("/admin?token=Pd445fDa54")
});

/* ======================================================= */
/* ======================================================= */
/* ======================================================= */

app.get("/admin/registros-cooperativas" , ( req , res ) => {
  let token = req.query.token;
    res.sendFile('registros.html', {root :  path.join(__dirname , '../public/views')});

  // if( token == 'Pd445fDa54' ){
  //   res.sendFile('admin.html', {root :  path.join(__dirname , '../public/views')});
  // }else{
  //   res.redirect('/admin/login')
  // }
});

app.post("/admin/registros-cooperativas" , ( req , res ) => {
  
  if( req.body.imprimirTerminales ){
    getTerminales()
    .then( terminales => {
      res.send(terminales)
    })
  }else if( req.body.id_terminal ){
    getCooperativas( req.body.id_terminal )
    .then( cooperativas => {
      res.send( cooperativas )
    })
  }
  
})



module.exports = app;
