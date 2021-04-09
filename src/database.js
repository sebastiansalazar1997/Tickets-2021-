const { Pool } = require("pg");

const pool = new Pool({
  user : 'postgres',
  host : 'localhost',
  password : 'LadesiempreSQL',
  database : 'tickets'
});

let regitrarFormulario = async ( data ) => {
    let texto = " INSERT INTO reservas( cedula , nombre , apellido ) VALUES( $1 , $2 , $3 )";
    let datos = [ data.phone , data.nombres , data.apellidos , data.message , data.email ];
    let guardar = await pool.query( texto , datos);
    console.log(guardar);
}



//  vamos a enviar los datos a la base de datos

let registrarReserva = async ( persona ) => {
    let texto = "INSERT INTO reservas( cedula , nombre , apellido, email, adultos, ninios, cooperativa, llegada, tiempo, fecha, salida ) VALUES( $1 , $2 , $3, $4, $5, $6, $7, $8, $9, $10, $11 )";
    let datos1 = [ 
      persona.cedula, 
      persona.nombre, 
      persona.apellido, 
      persona.email, 
      persona.adultos, 
      persona.ninios, 
      persona.cooperativa, 
      persona.llegada, 
      persona.tiempo,
      persona.fecha,
      persona.salida,
    ]

    datos1
};

// let regitrarUsuarios = () => {
//     let texto = " INSERT INTO reservas( cedula , nombre , apellido ) VALUES( $1 , $2 , $3 )";
//     let datos = [ data.phone , data.nombres , data.apellidos , data.message , data.email ];
//     let guardar = await pool.query( texto , datos);
//     console.log(guardar);
// }


module.exports = {
    regitrarFormulario,
    registrarReserva
}