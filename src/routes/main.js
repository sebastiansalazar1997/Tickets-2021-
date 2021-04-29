const express = require('express');
const app = express()
const path = require('path'); 
const Router = express.Router()
const { registrarDetalle_reserva , registrarCliente , registrarReserva , getTerminales , getCooperativas , getDestinos , getBuses , getHorarios } = require("../database")
const nodemailer = require( "../mailer" );

app.set('views', path.resolve(__dirname, '../public/views'));

// aqui se hace el metodo get traemos los datos desde la base
app.get( "/" , ( req, res ) => {
  res.sendFile('index.html', {root :  path.join(__dirname , '../public')}); //Cuando no se utliza ningun motor de plantilla lo hacemos asi
  
})

app.post( "/" , ( req , res ) => {
  /* ===== MOSTRAR LOS TERMINALES REGISTRADOS EN LA DB AL USUARIO ===== */
  if ( req.body.TEST === true ) {

    if( req.body.terminalSelect ){ //Con este "if" simplemente validamos si el post es ejecutando cuando eligue un terminal 
      // console.log(req.body);
      getTerminales().then( x => {
        res.json(x)
      });

    }else if( req.body.idCooperativa ){
      getCooperativas( req.body.idCooperativa )
      .then( x => {
        res.json(x)
      });
    }else if( req.body.id_cooperativa ){
      getDestinos( req.body.id_cooperativa)
      .then ( x => {
        res.json(x);
      })
    }else if( req.body.id_destino ){
      getHorarios( req.body.id_destino  )
      .then( x => {
        res.json(x)
      });

    }else if( req.body.id_bus ){
      getBuses( req.body.id_bus , req.body.destino )
      .then( x => {
        res.json(x)
      })

    }

  }else {

    
    
  const { terminalReserva , cooperativaReserva , destinoReserva , horaReserva , fechaReserva  , asientosAdultos , id_bus , asientosNinios , nombreReserva , apellidoReserva , cedulaReserva , emailReserva } = req.body;
  if ( nombreReserva && apellidoReserva && cedulaReserva , emailReserva  ) {
   let nombreok = /^\w{3,15}\s?(\w{3,15})?$/.test( nombreReserva );
   let apellidook =/^\w{3,15}\s?(\w{3,15})?$/.test( apellidoReserva  );
   let emailOk = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test( emailReserva );
   let cedulaok = /^[0-9]{10}$/.test( cedulaReserva )
  //  let adultosok = /^[1-9]{1,9}$/.test( adultosReserva );
  //  let niniosok = /^[1-9]{1,9}$/.test( niniosReserva );
   let id_reserva = Math.floor(Math.random() * 5000  );

  //  console.log( nombreok , apellidook , emailOk , cedulaok );
  
    let newDatosReserva = {
      id : id_reserva,
      asientosAdultos,
      asientosNinios,
      terminalReserva,
      cooperativaReserva,
      destinoReserva,
      horaReserva,
      fechaReserva,
      id_bus,
      estado : true
    }
    
    let newDatosUserReserva = {
      cedulaReserva,
      nombreReserva,
      apellidoReserva,
      emailReserva
    }


    
    if (nombreok , apellidook , emailOk , cedulaok){

      registrarReserva( newDatosReserva );
      registrarCliente( newDatosUserReserva );
      registrarDetalle_reserva( id_reserva , cedulaReserva )
      
      res.send(
        `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
      </head>
      <body style="background-color: rgb(15,15,15);">
          <img style="position : absolute ; top : 2% ; left : 1%;" width="50" src="../IMG/icono.png" alt="">
          <h1 style="text-align:center; color : white; margin-top : 50px">Datos guardados</h1>
          <div style="margin: auto; padding: 10px; text-align:center; color : white">
          <h6>Datos de la reserva</h6>
          <p style=" display : inline-block; margin-right : 15px;">Nombres: ${ nombreReserva }  ${ apellidoReserva }</p>
          <p style=" display : inline-block; margin-right : 15px;">Fecha: ${ fechaReserva }</p>
          <p style=" display : inline-block; margin-right : 15px;">Hora: ${ horaReserva }</p>
          <p style=" display : inline-block; margin-right : 15px;">Cooperativa: ${ cooperativaReserva }</p>
          <p style=" display : inline-block; margin-right : 15px;">Destino: ${ destinoReserva }</p>
          <p style=" display : inline-block; margin-right : 15px;">Hora: ${ horaReserva }</p>
          <p style=" display : inline-block; margin-right : 15px;">Unidad. ${ id_bus }</p>
          <a href="/" align="center" style="margin : auto; display : block; width : 100px; padding : 5px 10px ; border-radius : 5px ; color : black ; background-color : white ; cursor-pointer : none;">Regresar</a>
          </div>
      </body>
      </html>
        `
        
      )
      nodemailer( { email : newDatosUserReserva.emailReserva , terminal: newDatosReserva.terminalReserva  , fecha : newDatosReserva.fechaReserva , hora : newDatosReserva.horaReserva , names : newDatosUserReserva.nombreReserva + " " + newDatosUserReserva.nombreReserva , bus : "Completar" , asientos : "Completar" , destino : newDatosReserva.destinoReserva } )
      //Guardar en DB
      
    }
   
  }else {
    console.log("LLena todos los campos")
  }

    
  }
  
  
  
  
  
  
  
  
  
  
  
  
//  let datos=req.body;
//  // creamos un objeto persona
//  let persona = {
//    nombre : datos.Nombre, 
//    apellido : datos.Apellido,
//    email : datos.email,
//    adultos: datos.adultos,
//    ninios: datos.ninios,
//    cedula : datos.cedula,
//    cooperativa: datos.cooperativa,
//    llegada: datos.destino,
//    salida: datos.partida,
//    tiempo: datos.tiempo,
//    fecha: datos.fecha,
//  }


//    let nombreok=/^\w{3,15}\s?(\w{3,15})?$/.test(persona.nombre);
//    let apellidook=/^\w{3,15}\s?(\w{3,15})?$/.test(persona.apellido);
//   //  let emailOk = /^[-\w.%+]{1,15}@(?:[A-Z0-9-]{1,15}\.){1,20}[A-Z]{2,15}$/i.test(persona.email);
//   //  let emailOk = /^[w+@.]$/.test(persona.email);
//    let emailOk = true;
//    let adultosok= /^[1-9]{1,9}$/.test(persona.adultos);
//    let niniosok= /^[1-9]{1,9}$/.test(persona.ninios);
//    let cedulaok = /^[0-9]{10}$/.test(persona.cedula)


// // aqui validamos los datos 
//  if(persona.nombre == '' || persona.apellido == '' || persona.email == '' || persona.cedula == '' || persona.ninios == 0 || persona.adultos == 0  ){ 
//    console.log("LLENE TODOS LOS CAMPOS");
//  }else if( nombreok && apellidook &&  emailOk && adultosok && niniosok) {
//      /* ===aqui es en dodne guardamos los datos en la base de datos==== */
//     //  console.log("Reserva guardada con exito");
//      registrarReserva( persona )
//   }
});




module.exports = app;

