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

// let regitrarUsuarios = () => {
//     let texto = " INSERT INTO reservas( cedula , nombre , apellido ) VALUES( $1 , $2 , $3 )";
//     let datos = [ data.phone , data.nombres , data.apellidos , data.message , data.email ];
//     let guardar = await pool.query( texto , datos);
//     console.log(guardar);
// }


module.exports = {
    regitrarFormulario,
}