const express = require('express');
const app = express()
const path = require('path'); 
const { domainToASCII } = require('url');
const Router = express.Router()
const { regitrarUsuarios } = require("../database")
app.set('views', path.resolve(__dirname, '../public/views'));


app.get( "/" , ( req, res ) => {
  console.log("dentro");
  res.sendFile('index.html', {root :  path.join(__dirname , '../public')}); //Cuando no se utliza ningun motor de plantilla lo hacemos asi
})
app.post( "/" , ( req, res ) => {
 let datos=req.body
 if(datos.Nombre != undefined || datos.Apellido != undefined || datos.email != undefined ){ 
   let nombreok=/^\w{3,15}\s?(\w{3,15})?$/.test(datos.Nombre);
   let apellidook=/^\w{3,15}\s?(\w{3,15})?$/.test(datos.Apellido);
   let emailOk = /^[-\w.%+]{1,15}@(?:[A-Z0-9-]{1,15}\.){1,20}[A-Z]{2,15}$/i.test(datos.email);
   console.log (nombreok)
   console.log (datos.Nombre)
   console.log (apellidook)
   console.log (datos.Apellido)
   console.log (emailOk)
   console.log (datos.email)
  
 }
})


module.exports = app;

