let $terminal = document.querySelector("#terminalReserva");
let $cooperativa = document.querySelector("#cooperativaReserva");
let $destino = document.querySelector("#destinoReserva");
let $horaReserva = document.querySelector("#horaReserva");
let $buses = document.querySelector("#buses");
class getSelect {
    constructor(){}

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
        this.limpiarSelectCooperativas()
        this.limpiarSelectDestino()
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
    };

    // buses = ( id ) => {
    //     fetch("/" , { method : "POST" , 
    //     headers : { "Content-type" : "application/json" },
    //     body : JSON.stringify({ id_bus : id  , TEST : true })
    //     })
    //     .then( res => res.json() )
    //     .then( data => {
    //         $buses.value = `${ data.a }`
    //         console.log( data );
    //         // this.imprimirDestinos( data )
    //     });
    // }

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



/* ============EJECUTRA0======= */

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

let getSelectNew = new getSelect();
getSelectNew.terminal( true )