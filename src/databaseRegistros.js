const { response } = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  user : 'postgres',
  host : 'localhost',
  password : 'LadesiempreSQL',
  database : 'TICKETS 2.1 2021'
});


let getTerminales = async ( data ) => {
    try{
        let texto = "SELECT * FROM terminal";
        let terminales = await pool.query(texto)
        return terminales.rows;
      }catch(e){
        return "Oops, a ocurrido un error"
      }
    
}

let getCooperativas = async( id_terminal ) => {
    try{
        let texto = "SELECT * FROM cooperativa where fk_terminal = $1";
        let datos = [ id_terminal ]
        let terminales = await pool.query(texto, datos )
        return terminales.rows;
      }catch(e){
        return "Oops, a ocurrido un error"
      }
    
}

let getDestinos = async( id_cooperativa ) => {
    
    try{
        let texto = "SELECT * FROM destino where fk_cooperativa = $1";
        let datos = [ id_cooperativa ]
        let destinos = await pool.query(texto , datos )
        return destinos.rows;
      }catch(e){
        return "Oops, a ocurrido un error"
      }

}

let getHorarios = async( id_destino ) => {
    
    try{
        let texto = "SELECT * FROM horario where fk_destino = $1";
        let datos = [ id_destino ]
        let horarios = await pool.query(texto , datos )
        return horarios.rows;
      }catch(e){
        return "Oops, a ocurrido un error"
      }

}

let getDetalle_reserva = async() => {
  try{
    let texto = "SELECT * FROM detalle_reserva";
    let horarios = await pool.query(texto)
    return horarios.rows;
  }catch(e){
    return "Oops, a ocurrido un error"
  }
}


module.exports = {
    getTerminales,
    getCooperativas,
    getDestinos,
    getHorarios,
    getDetalle_reserva
}