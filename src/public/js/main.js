let $terminal = document.querySelector("#terminalReserva");
let $cooperativa = document.querySelector("#cooperativaReserva");
let $destino = document.querySelector("#destinoReserva");
let $horaReserva = document.querySelector("#horaReserva");
let $buses = document.querySelector("#buses");
let $asientos = document.querySelector("#asientos");
let $asientos_der = document.querySelector(".asientos-der");
let $asientos_izq = document.querySelector(".asientos-izq");
let $__busContainerMain = document.querySelector(".__busContainerMain");
let $busContainer = document.querySelector("#busContainer");


let asientosArrayOcupados = []
class getSelect {
    constructor( asientosOcuadosArray ){
        this.asientosOcupados = asientosOcuadosArray;
        this.asientosMain = [];
    }

    terminal = ( boolean ) =>{
        fetch("/" , { method : "POST" ,
        headers : { "Content-type" : "application/json" },
        body : JSON.stringify({ terminalSelect : boolean , TEST : true })
        })
        .then( res => res.json() )
        .then( data => {
            this.imprimirTerminales( data )
        });
    }


    imprimirTerminales = ( data ) => {

        for( let i = 0; i < data.length ; i++ ){
            $terminal.innerHTML += `<option value="${data[i].id_terminal}">${data[i].nombre}</option>`
        }

        let primerOption = $terminal.getElementsByTagName("option");
        this.cooperativas( primerOption[0].value )

    }

    cooperativas = (idCooperativa) => {
        fetch("/" , { method : "POST" ,
        headers : { "Content-type" : "application/json" },
        body : JSON.stringify({ idCooperativa : idCooperativa , TEST : true })
        })
        .then( res => res.json() )
        .then( data => {
            this.imprimirCooperativas( data )
        });
    }

    imprimirCooperativas = ( data ) => {
        this.limpiarSelectCooperativas();
        this.limpiarSelectDestino();
        this.limpiarSelectHorario();
        // this.limpiarBusAsientos();
        for( let i = 0; i < data.length ; i++ ){
            $cooperativa.innerHTML += `<option value="${data[i].id_cooperativa}">${data[i].nombre}</option>`
        }
        this.destinos( $cooperativa.value )
    }

    destinos = ( id ) => {
        fetch("/" , { method : "POST" ,
        headers : { "Content-type" : "application/json" },
        body : JSON.stringify({ id_cooperativa : id  , TEST : true })
        })
        .then( res => res.json() )
        .then( data => {
            this.imprimirDestinos( data )
        });
    };


    imprimirDestinos = ( data ) =>{
        this.limpiarSelectDestino()
        for( let i = 0; i < data.length ; i++ ){
            $destino.innerHTML += `<option value="${data[i].id_destino}">${data[i].nombre}</option>`
        }

        this.horarios( $destino.value  )
    }


    horarios = ( id ) => {
        fetch("/" , { method : "POST" ,
        headers : { "Content-type" : "application/json" },
        body : JSON.stringify({ id_destino : id  , TEST : true })
        })
        .then( res => res.json() )
        .then( data => {
            this.imprimirHorarios( data )
        });
    };

    imprimirHorarios = ( data ) => {
        this.limpiarSelectHorario()
        for( let i = 0; i < data.length ; i++ ){
            $horaReserva.innerHTML += `<option value="${data[i].id_horario}">${data[i].hora_salida}</option>`
        }

        this.busAsientos( $horaReserva.value )

    };

    busAsientos = ( id ) => {
        fetch("/" , { method : "POST" ,
        headers : { "Content-type" : "application/json" },
        body : JSON.stringify({ id_bus : id  , TEST : true })
        })
        .then( res => res.json() )
        .then( data => {
            this.asientosMain = data
        });
        
    }

  

    imprimirBusAsientos = ( data ) => {
        this.limpiarBusAsientos()
        // console.log( data );
        let ventana = data.asientos.filter( x => {
            return x.descripcion == 'ventana'
        });

        let pasillo = data.asientos.filter( x => {
            return x.descripcion == 'pasillo'
        });


        for( let i = 0 ; i < ventana.length ; i++ ){
            $asientos_der.innerHTML += `<div id="${ ventana[i].nombre_asiento }">
            ${ ventana[i].nombre_asiento }
            <input value="${ ventana[i].nombre_asiento }"  name="asientosSeleccionados" hidden >
            </div>`
        }

        for( let i = 0 ; i < pasillo.length ; i++ ){
            $asientos_izq.innerHTML += `<div id="${ pasillo[i].nombre_asiento }">${ pasillo[i].nombre_asiento }</div>`
        }

        this.asientosOcupadosFiltrar( data )
    }

    asientosOcupadosFiltrar = ( data ) => {
        let asientosOcupadosFilter = data.asientos.filter( x => {
            return x.estado == false
        });

        asientosOcupadosFilter != undefined && asientosOcupadosFilter.length > 0  ? 
        this.guardarAsientosOcupados( asientosOcupadosFilter )
        :
        this.guardarAsientosOcupados( false )
    }

    guardarAsientosOcupados = ( data ) => {
        if( data ){
            this.asientosOcupados = data;
            this.pintarAsientosOcupados()
        }

        return  this.asientosOcupados
    };
     

    pintarAsientosOcupados = () => {
        for( let i = 0 ; i < this.asientosOcupados.length ; i++ ){
            let asientoOcupado = document.getElementById(`${ this.asientosOcupados[i].nombre_asiento }`);
            asientoOcupado.setAttribute("style" , "background-color : orange");
        }
    };
 


    limpiarBusAsientos = () => {
        $asientos_der.innerHTML = "";
        $asientos_izq.innerHTML = "";
    }

    limpiarSelectHorario = () => {
        $horaReserva.innerHTML = "";
    }

    limpiarSelectDestino = () => {
        $destino.innerHTML = "";
    }

    limpiarSelectCooperativas = () => {
        $cooperativa.innerHTML = "";
    };


}

let asientosSelect = []
let asientosSelectOcupados = []

class Asientos{
  constructor( asientosArray , asientosArrayOcupados  ){
      this.asientosPintar = asientosArray;
      this.asientosPintarOcupados = asientosArrayOcupados;
  }

    comprovarAsientos = ( id ) => {
        console.log();
            if(this.asientosPintar.includes( id )){
                this.deselccionarAsiento( id )
            }else{
                this.seleccionarAsiento( id )
            }
    }

    error = () => {
        alert("Maximo 5 asientos")
    }

    seleccionarAsiento = ( id ) => {
        if( this.asientosPintar.length >= 5 ){
            this.error()
        }else{
            this.asientosPintar.push( id )
            this.pintarAsientos()
        }
    };
    
    deselccionarAsiento = async( id ) => {
        await this.eliminarAtrr()
        let indice = this.asientosPintar.indexOf( id )
        this.asientosPintar.splice( indice , 1 )
        this.pintarAsientos()
    };
    
    
    pintarAsientos = ( id ) =>{
        for( let i = 0 ; i < this.asientosPintar.length ; i++ ){
            let asiento = document.getElementById(`${ this.asientosPintar[i] }`);
            asiento.setAttribute("style" , "background-color : skyblue");
        }
    };

    pintarAsientosOcupados = () => {
        for( let i = 0 ; i < this.asientosPintar.length ; i++ ){
            let asiento = document.getElementById(`${ this.asientosPintar[i] }`);
            asiento.setAttribute("style" , "background-color : skyblue");
        }
    };

    eliminarAtrr = () => {
        for( let i = 0 ; i < this.asientosPintar.length ; i++ ){
            let asiento = document.getElementById(`${ this.asientosPintar[i] }`);
            asiento.removeAttribute("style");
        }
    }
    
}


// let impedirPintarAsientosOcupados = () => {
//     let getSelectNew = new getSelect();
//     getSelectNew.busAsientos( $horaReserva.value )
// }


/* ==============MOSTRAR OCULTAR BUS =============== */
let mostrarBus = () => {
 $__busContainerMain.style.display = "flex"
}

$__busContainerMain.addEventListener("click" , x => {
    if (x.target.id == 'busContainer' ) {
        $__busContainerMain.style.display = "none"
    }
});
/* ==============*FIN MOSTRAR OCULTAR BUS =============== */


/* ================ASIENTOS================= */
$busContainer.addEventListener( "click", x => {
    let newAsiento = new Asientos( asientosSelect , asientosSelectOcupados );
    if ( x.target.id &&  x.target.id != "busContainer" ) {
        newAsiento.comprovarAsientos(x.target.id)
    }
  })
/* =======*FIN ASIENTOS========= */


/* ============EJECUTRA======= */
$horaReserva.addEventListener("change" , () => {
    let getSelectNew = new getSelect();
    let asientosImpedirPintar =  getSelectNew.busAsientos( $horaReserva.value );
    console.log( asientosImpedirPintar );
});

$destino.addEventListener("change" , () => {
    let getSelectNew = new getSelect();
    getSelectNew.horarios( $destino.value )
});

$cooperativa.addEventListener("change" , () => {
    let getSelectNew = new getSelect();
    getSelectNew.destinos( $cooperativa.value );
});

$terminal.addEventListener("change" , () => {
    let getSelectNew = new getSelect();
    getSelectNew.cooperativas( $terminal.value );
});

let getSelectNew = new getSelect( asientosArrayOcupados );
getSelectNew.terminal( true )
