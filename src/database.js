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

  getBuses = async( id , id_destino )=> {
    try{
      let textoDestino = "SELECT * FROM destino where id_destino = $1"
      let textoBus = "SELECT * FROM bus where id_horario = $1";
      let textoAsientos = "SELECT * FROM asiento where fk_bus = $1";
      let datos = [ id ]
      let datosDestino = [ id_destino ]
      let buses = await pool.query( textoBus , datos )
      let asientos = await pool.query( textoAsientos , datos )
      let destino = await pool.query( textoDestino , datosDestino )
      return {
        bus : buses.rows,
        asientos : asientos.rows,
        destino : destino.rows
      };
       
    }catch(e){
      return "Oops, a ocurrido un error"
    }
    
  }
  
  /* =============================================================================== */
  /* ==========================REGISTROS ADMINISTRADOR============================== */
  /* =============================================================================== */

  registrarTerminal = async( terminal ) => {
    try{
      let textoTerminal = "INSERT INTO terminal( id_terminal , nombre ) values( nextval('secuencia_pk_terminal'),  $1   )"
      let datos = [ terminal ]
      let guardarTerminal = await pool.query( textoTerminal , datos );
      return guardarTerminal.rows
    }catch(e){
      console.log(e);
    }
  } 

module.exports = {
    regitrarFormulario,
    registrarReserva,
    getTerminales,
    getCooperativas,
    getDestinos,
    getHorarios,
    getBuses,
    registrarTerminal
}