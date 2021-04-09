const express = require('express');
const app = express()
const path = require('path'); 
const { domainToASCII } = require('url');
const Router = express.Router()
const { registrarReserva } = require("../database")
app.set('views', path.resolve(__dirname, '../public/views'));

// aqui se hace el metodo get traemos los datos desde la base
app.get( "/" , ( req, res ) => {
  console.log("dentro");
  res.sendFile('index.html', {root :  path.join(__dirname , '../public')}); //Cuando no se utliza ningun motor de plantilla lo hacemos asi
})
app.post( "/" , ( req, res ) => {
 let datos=req.body;
 // creamos un objeto persona
 let persona = {
   nombre : datos.Nombre, 
   apellido : datos.Apellido,
   email : datos.email,
   adultos: datos.adultos,
   ninios: datos.ninios,
   cedula : datos.cedula,
   cooperativa: datos.cooperativa,
   llegada: datos.destino,
   salida: datos.partida,
   tiempo: datos.tiempo,
   fecha: datos.fecha,
 }


   let nombreok=/^\w{3,15}\s?(\w{3,15})?$/.test(persona.nombre);
   let apellidook=/^\w{3,15}\s?(\w{3,15})?$/.test(persona.apellido);
  //  let emailOk = /^[-\w.%+]{1,15}@(?:[A-Z0-9-]{1,15}\.){1,20}[A-Z]{2,15}$/i.test(persona.email);
  //  let emailOk = /^[w+@.]$/.test(persona.email);
   let emailOk = true;
   let adultosok= /^[1-9]{1,9}$/.test(persona.adultos);
   let niniosok= /^[1-9]{1,9}$/.test(persona.ninios);
   let cedulaok = /^[0-9]{10}$/.test(persona.cedula)


// aqui validamos los datos 
 if(persona.nombre == '' || persona.apellido == '' || persona.email == '' || persona.cedula == '' || persona.ninios == 0 || persona.adultos == 0  ){ 
   console.log("LLENE TODOS LOS CAMPOS");
 }else if( nombreok && apellidook &&  emailOk && adultosok && niniosok) {
     /* ===aqui es en dodne guardamos los datos en la base de datos==== */
    //  console.log("Reserva guardada con exito");
     registrarReserva( persona )
  }
})




module.exports = app;

