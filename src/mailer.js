const nodemailer = require('nodemailer');

module.exports = function (user) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'eas.gavilanez@yavirac.edu.ec',
      pass: '1726473638',
    },
  });

  const styles = {
    'background-color': 'rgb(32, 32, 32);',
    padding: '10px;',
    'border-radius': '10px;',
    'text-align': 'center;',
  };

  var mailOptions = {
    from: `eas.gavilanez@yavirac.edu.ec`,
    to: `${user.email}`,
    subject: 'Tickets Project',
    html: `
    <div style="background : black ; padding : 15px ; text-align: center ; border-radius: 10px ;">
    <img style="float : left" src="https://i.ibb.co/ftDtHSs/icono.png" width="50" alt="icono" border="0">
      <h1 style="color : white">Datos de la reserva</h1>
      <p style="color : white"> Hola ${user.names} su reserva es la siguiente :</p>
      <p style="color : white">Terminal ${user.terminal}</p>
      <p style="color : white" >Bus : ${user.bus}</p>
      <p style="color : white" >Fecha: ${user.fecha}</p>
      <p style="color : white" >Hora : ${user.hora}</p>
      <p style="color : white" >Destino :  ${user.destino}</p>
      <p style="color : white" >Numero de asientos :  ${user.asientos}</p>
    </div>
  `,
  };

  /* 
  <div style="background : black ; padding : 15px ; text-align: center ; border-radius: 10px ;">
  <img style="float : left" src="https://i.ibb.co/ftDtHSs/icono.png" width="50" alt="icono" border="0">
    <h1 style="color : white">Datos de la reserva</h1>
    <p style="color : white"> Hola ${ user.names } su reserva es la siguiente :</p>
    <p style="color : white">Terminal ${ user.terminal }</p>
    <p style="color : white" >Bus : ${ user.bus }</p>
    <p style="color : white" >Fecha: ${ user.fecha }</p>
    <p style="color : white" >Hora : ${ user.hora }</p>
    <p style="color : white" >Destino :  ${ user.destino }</p>
    <p style="color : white" >Numero de asientos :  ${ user.asientos }</p>
  </div>


 */

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
