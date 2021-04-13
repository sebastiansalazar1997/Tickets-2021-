const { response } = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  user : 'postgres',
  host : 'localhost',
  password : 'LadesiempreSQL',
  database : 'TICKETS 2.1 2021'
});

let regitrarFormulario = async ( data ) => {
    let texto = " INSERT INTO reservas( cedula , nombre , apellido ) VALUES( $1 , $2 , $3 )";
    let datos = [ data.phone , data.nombres , data.apellidos , data.message , data.email ];
    let guardar = await pool.query( texto , datos);
}



//  vamos a enviar los datos a la base de datos

let registrarReserva = async ( persona ) => {
    let texto = "INSERT INTO cliente( cedula , nombre , apellido, correo ) VALUES( $1 , $2 , $3, $4)";
    let textoReserva = "INSERT INTO reserva( fecha , estado , id_bus , nro_niños , nro_adultos , id_destino , lugar_salida , hora ) VALUES( $1 , $2 , $3, $4 , $5 , $6 , $7 , $8)";
    let detalle_reserva = "INSERT INTO detalle_reserva( id_reserva , id_asiento , cedula_cliente )values ( $1 , $2 , $3 ) "

    let texto_detalle_reserva = [  "id_reserva?" , "asiento" , datos.cedula   ]
    
    let datos = [ 
      persona.cedula, 
      persona.nombre, 
      persona.apellido, 
      persona.email, 
    ]
     
    let bus = 1;
    let destino = 1;
    let estado = true;
    
    console.log(persona.tiempo);
    
    let datosReserva = [
      persona.fecha,
      estado,
      bus,
      persona.ninios, 
      persona.adultos, 
      destino,
      persona.salida,
      persona.tiempo,
      // persona.cooperativa, 
      // persona.llegada, 
    ]


    let guardarDos = await pool.query( textoReserva , datosReserva )
    let guardar = await pool.query( texto , datos )
    console.log(guardar.rows);
};

getTerminales = async() => {
  try{
    let texto = "SELECT * FROM terminal";
    let terminales = await pool.query(texto)
    return terminales.rows;
  }catch(e){
    return "Oops, a ocurrido un error"
  }
}
 
getCooperativas = async(id) =>{
  try{
    let texto = "SELECT * FROM cooperativa where fk_terminal = $1";
    let datos = [ id ]
    let cooperativas = await pool.query(texto , datos )
    return cooperativas.rows;
  }catch(e){
    return "Oops, a ocurrido un error"
  }
}

getDestinos = async( id ) => {

  try{
    let texto = "SELECT * FROM destino where fk_cooperativa = $1";
    let datos = [ id ]
    let destinos = await pool.query(texto , datos )
    return destinos.rows;
  }catch(e){
    return "Oops, a ocurrido un error"
  }
  
}

    getHorarios = async( id ) => {
      try{
        let texto = "SELECT * FROM horario where fk_destino = $1";
        let datos = [ id ]
        let horarios = await pool.query(texto , datos )
        return horarios.rows;
      }catch(e){
        return "Oops, a ocurrido un error"
      }

    }

  getBuses = async( id )=> {

    try{
      let texto = "SELECT * FROM bus where fk_destino = $1";
      let datos = [ id ]
      let buses = await pool.query(texto , datos )
      return buses.rows;
    }catch(e){
      return "Oops, a ocurrido un error"
    }
    
  }


module.exports = {
    regitrarFormulario,
    registrarReserva,
    getTerminales,
    getCooperativas,
    getDestinos,
    getHorarios,
    getBuses
}