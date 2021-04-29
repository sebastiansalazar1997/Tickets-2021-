
let $terminalesSelect = document.getElementById("terminalesSelect");
let $_registrosTerminal = document.querySelector("._registrosTerminal");
class Registros {
    constructor(  id_terminal ){
        this.id_terminal = id_terminal;
        this.cooperativa = {};
        this.destinos = {};
        this.horariosPush = [];
        this.imprimirRegistro = {
            cooperativa : {},
            destino : {},
            coductor : {},
            unidad : "",
            asientos : 0
        }
    }

    getTerminales = ( dato ) => {
        fetch("/admin/registros-cooperativas" , { method : "POST" ,
        headers : { "Content-type" : "application/json" },
        body : JSON.stringify({imprimirTerminales : true})
        })
        .then( res => res.json() )
        .then( terminales => {
            this.imprimirTerminales( terminales )
        });
    }


    imprimirTerminales = ( data ) => {
        for( let i = 0; i < data.length ; i++ ){
            $terminalesSelect.innerHTML += `<option value="${data[i].id_terminal}">${data[i].nombre}</option>`
        }

         this.id_terminal = $terminalesSelect.value;
        this.getCooperativas()
    };

    
    
    getCooperativas = () => {
        this.limpiarRegistors()
        fetch("/admin/registros-cooperativas" , { method : "POST" ,
        headers : { "Content-type" : "application/json" },
        body : JSON.stringify({ id_terminal : this.id_terminal })
        })
        .then( res => res.json() )
        .then( cooperativas => {
            if ( cooperativas <= 0 ) {
                this.dataCero()
            }else{
                this.buscarDestinosbyId( cooperativas )
            }
        });

    }

    dataCero = () => {
        $_registrosTerminal.innerHTML = 
        `
        <div align="center" style="color: rgba(104, 104, 104, 0.4); background-color : rgb(235, 235, 235) ; margin-top : 100px">
            <h1>No hay datos que mostrar</h1>
        </div>
        `
    };

    buscarDestinosbyId = ( cooperativas ) => {

        for( let i = 0; i < cooperativas.length ; i++ ){
            this.cooperativa = cooperativas[i]
            // $destino.innerHTML += `<option value="${data[i].id_destino}">${data[i].nombre}</option>`
            this.getDestinos( cooperativas[i] )
        }
        
    }
    
    getDestinos = ( cooperativa ) => {
        fetch("/admin/registros-cooperativas" , { method : "POST" ,
        headers : { "Content-type" : "application/json" },
        body : JSON.stringify({ id_cooperativa : this.cooperativa.id_cooperativa })
        })
        .then( res => res.json() )
        .then( destinos => {
            this.destinos = destinos;
                this.imprimirRegistros( cooperativa , destinos , this.horariosPush );
        });
        // console.log( this.cooperativa.id_cooperativa );
    }

    limpiarRegistors = () => {
        $_registrosTerminal.innerHTML = ''
    }
    

    imprimirRegistros = ( cooperativa , destinos ) => {
        let destinosArray = [];
        let $imprimirDatosCooperativa = document.querySelector(".imprimirDatosCooperativa");

        for( let i = 0; i < destinos.length ; i++ ){
            destinosArray.push( `

                    <tr>
                    <td>
                        <p>
                            ${destinos[i].nombre}
                            <span class="material-icons editItem">edit</span>
                            <span class="material-icons hiddenItem">hide_source</span>
                            <span class="material-icons deleteItem">delete</span>
                        </p>
                    </td>
                    <td>
                        <p>
                            Juan Fernando
                            <span class="material-icons editItem">edit</span>
                        </p>
                    </td>
                    <td>
                        <p>08:00 AM
                            <span class="material-icons editItem">edit</span>
                            </p>
                            <p>10:00 AM
                            <span class="material-icons editItem">edit</span>
                            </p>
                            <p>13:00 PM
                            <span class="material-icons editItem">edit</span>
                        </p>
                    </td>
                    <td>
                        <p>N° 10
                            <span class="material-icons editItem">edit</span>
                            </p>
                            <p>N° 33
                            <span class="material-icons editItem">edit</span>
                            </p>
                            <p>N° 12
                            <span class="material-icons editItem">edit</span>
                        </p>
                    </td>
                </tr>
            
            `);

            this.getHorarios( destinos[i].id_destino )
            
        }

        
        $_registrosTerminal.innerHTML += 
        `
            <div class="nombreCooperativaDestino">
                <div class="nombreCooperativaTerminal">
                <h6>${ cooperativa.nombre }
                    <span class="material-icons edit">edit</span>
                    <span class="material-icons hidden">hide_source</span>
                    <span class="material-icons delete">delete</span>
                </h6>
                </div>
                <hr>

                <div class="listaDestinosCooperativaBox">
                    <table>
                        <thead>
                            <tr class="imprimirDestinosDB">
                            <th><h5>Destino</h5></th>
                            <th><h5>Conductor</h5></th>
                            <th><h5>Horarios</h5></th>
                            <th><h5>Unidades</h5></th>
                            </tr>
                        </thead>

                        <tbody class="imprimirDatosCooperativa">
                            
                            ${ destinosArray.join("") }

                        </tbody>
                    </table>
                </div>
            </div>
            
        
        
        `
    };

    getHorarios = ( id_destino ) => {
        fetch("/admin/registros-cooperativas" , { method : "POST" ,
        headers : { "Content-type" : "application/json" },
        body : JSON.stringify({ id_destino })
        })
        .then( res => res.json() )
        .then( horarios => {
            this.horarios = horarios;
            console.log( horarios );
            // this.imprimirRegistros( cooperativa , destinos , horarios );
        });
        
    }
    

}
/* =========================================== */
/* ===================GET DATA================ */
/* =========================================== */

$terminalesSelect.addEventListener("change" , x => {
    let newData = new Registros( $terminalesSelect.value );
    newData.getCooperativas()
});

let newData = new Registros();
newData.getTerminales()
