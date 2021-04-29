const express = require("express");
const { join } = require("path");
const app = express();
const path = require('path');
const { getTerminales , getCooperativas , getDestinos , getHorarios , getDetalle_reserva } = require('../databaseRegistros')

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
  if( token == 'Pd445fDa54' ){
    res.sendFile('registros.html', {root :  path.join(__dirname , '../public/views')});
  }else{
    res.redirect('/admin/login')
  }
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
  }else if( req.body.id_cooperativa ){
    getDestinos( req.body.id_cooperativa )
    .then( destinos => {
      res.send( destinos )
    })
  }else if( req.body.id_destino ){
    getHorarios( req.body.id_destino )
    .then( horarios => {
      res.send( horarios )
    })
  }
  
})


app.get("/admin/registros-reservas" , ( req , res ) => {
  //admin/registros-reservas?token=Pd445fDa54
  let token = req.query.token;
  if( token == 'Pd445fDa54' ){
    res.sendFile('reservas.html', {root :  path.join(__dirname , '../public/views')});
  }else{
    res.redirect('/admin/login')
  }
});


app.post("/admin/registros-reservas" , ( req , res ) => {
  //admin/registros-reservas?token=Pd445fDa54

  if( req.body.detalle_reserva ){
    getDetalle_reserva()
    .then( detalle_reserva => {
      res.send( detalle_reserva )
    })
  }
  
});


module.exports = app;
