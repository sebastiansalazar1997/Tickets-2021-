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
let $cantidadAdultos = document.getElementById("cantidadAdultos");
let $cantidadNinios = document.getElementById("cantidadNinios");
let $niniosAdulto = document.querySelector(".niniosAdulto");
let $numeroTotal = document.querySelector(".numeroTotal");
let $precioPorAsiento = document.querySelector(".precioPorAsiento");
let $valorTotal = document.querySelector(".valorTotal");


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
        this.limpiarBusAsientos()
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

            this.imprimirBusAsientos( data )
            
        });
        
    }

    

    imprimirBusAsientos = ( data ) => {
        this.limpiarBusAsientos()
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


/* ======================================================================================= */
/* ======================================================================================= */
/* ======================================================================================= */
/* ======================================================================================= */



let asientosSelect = []
let asientosSelectNinios = []
class Asientos{
  constructor( asientosArray , asientosArrayNinios ){
      this.asientosPintar = asientosArray;
      this.asientosPintarNinios = asientosArrayNinios;
      this.asientosPintarOcupados = [];
      this.colorAsiento = "";
      this.$adultoONinioRadio = document.reservaAsientoForm.adultosNinios.value;
      this.precioDestinoAdulto = 0
      this.precioDestinoNinio = 0
  }

  
  
    busAsientos = ( id , id_asiento , id_destino ) => {
        fetch("/" , { method : "POST" ,
        headers : { "Content-type" : "application/json" },
        body : JSON.stringify({ id_bus : id , destino : id_destino, TEST : true })
        })
        .then( res => res.json() )
        .then( data => {
            this.precioDestinoAdulto = data.destino[0].precio_adulto;
            this.precioDestinoNinio = data.destino[0].precio_ninio;
            if( id_asiento == null ){
                return this.imprimirValoresAsientos();
            }
            this.nombreAColor( data.asientos , id_asiento );
        });
        
    }

    precioPagarDestino = () => {
        let precioAdulto = this.precioDestinoAdulto * this.asientosPintar.length;
        let precioNinio = this.precioDestinoNinio * this.asientosPintarNinios.length;
        let total = precioAdulto + precioNinio;
        if( total > 0 ){
            $valorTotal.style.display = "flex"
            this.imprimirPecioTotalpagar( total )
        }else{
            $valorTotal.style.display = "none"
        }
        
    }

   
    
    imprimirPecioTotalpagar = ( total ) => {
        $numeroTotal.innerHTML = `<h6>&nbsp$${ total }</h6>`        
    };

    nombreAColor = ( asientos , id ) => {
        if( this.$adultoONinioRadio == '' ){
            this.error("color")
        }else{
            switch ( this.$adultoONinioRadio ) {
                case "ninios":
                // return "green"
                this.colorAsiento = "greenyellow"
                break;
                case "adultos":
                    // return "skyblue"
                this.colorAsiento = "skyblue"
                break;
            }
                    
            this.impedirPintarAsientosOcupados( asientos , id )
        }
    }
  
    impedirPintarAsientosOcupados = ( data , id_asiento ) => {
        let asientosOcupados = data.filter( (x) => {
            return x.estado == false
        });

        for( let i = 0 ; i < asientosOcupados.length ; i++ ){
            this.asientosPintarOcupados.push( asientosOcupados[i].nombre_asiento )
        }
        

        if( !this.asientosPintarOcupados.includes( id_asiento ) ){
            this.comprovarAsientos( id_asiento )
        }
    }
    
    comprovarAsientos = ( id ) => {
            if(this.asientosPintar.includes( id ) || this.asientosPintarNinios.includes( id ) ){
                this.deselccionarAsiento( id )
            }else{
                this.seleccionarAsiento( id )
            }
    }

    error = ( err ) => {
        if ( err == 'maximo' ) {
            alert("Maximo 5 asientos")
        }else if( err = 'color' ){
            alert("Elige adulto o niños")
        }
    }

    seleccionarAsiento = ( id ) => {
        if( this.asientosPintar.length >= 5 || this.asientosPintarNinios.length >= 5){
            this.error("maximo")
        }else{
            if( this.$adultoONinioRadio == 'adultos' ){
                this.asientosPintar.push( id );
                console.log( this.asientosPintar );
            }else if( this.$adultoONinioRadio == 'ninios' ){
                this.asientosPintarNinios.push( id );
                console.log( this.asientosPintarNinios );
            }

            this.pintarAsientos()
            this.precioPagarDestino()
        }
    };
    
    deselccionarAsiento = async( id ) => {
        await this.eliminarAtrr()
        let indice = this.asientosPintar.indexOf( id )
        let indiceNinios = this.asientosPintarNinios.indexOf( id )
        if( indice != -1 ){
            this.asientosPintar.splice( indice , 1 )
        }else if(  indiceNinios != -1 ){
            this.asientosPintarNinios.splice( indiceNinios , 1 )
        }
        this.pintarAsientos()
        this.precioPagarDestino()
    };
    
    
    pintarAsientos = (  ) =>{
        for( let i = 0 ; i < this.asientosPintar.length ; i++ ){
            let asiento = document.getElementById(`${ this.asientosPintar[i] }`);
            asiento.setAttribute("style" , `background-color : skyblue`);
        }

        for( let i = 0 ; i < this.asientosPintarNinios.length ; i++ ){
            let asiento = document.getElementById(`${ this.asientosPintarNinios[i] }`);
            asiento.setAttribute("style" , `background-color : yellowgreen`);
        }
    };

    

    eliminarAtrr = () => {
        for( let i = 0 ; i < this.asientosPintar.length ; i++ ){
            let asiento = document.getElementById(`${ this.asientosPintar[i] }`);
            asiento.removeAttribute("style");
        }

        for( let i = 0 ; i < this.asientosPintarNinios.length ; i++ ){
            let asiento = document.getElementById(`${ this.asientosPintarNinios[i] }`);
            asiento.removeAttribute("style");
        }
    }

    imprimirValoresAsientos = () => {
        $precioPorAsiento.innerHTML = `<h6>&nbspAdultos: $${ this.precioDestinoAdulto } - Niños : $${ this.precioDestinoNinio }</h6>`
    }
    
}



/* ==============MOSTRAR OCULTAR BUS =============== */
let mostrarBus = () => {
    $__busContainerMain.style.display = "flex"
    let newAsiento = new Asientos()
    newAsiento.busAsientos( $horaReserva.value , null , $destino.value )
}

$__busContainerMain.addEventListener("click" , x => {
    if (x.target.id == 'busContainer' ) {
        $__busContainerMain.style.display = "none"
    }
});
/* ==============*FIN MOSTRAR OCULTAR BUS =============== */


/* ============0ASIENTOS PINTAR - DESPINTAR============*/
  $busContainer.addEventListener( "click", x => {
      let newAsiento = new Asientos( asientosSelect , asientosSelectNinios  );
      if ( x.target.id &&  x.target.id != "busContainer" ) {
        newAsiento.busAsientos( $horaReserva.value , x.target.id , $destino.value )
    }
  })
/* =======*FIN ASIENTOS PINTAR - DESPINTAR========= */


/* ============IMPRIMIR TERMINAL - COOPERATIVAS - DESTINO - HORA - BUS Y ASIENTOS======= */
$horaReserva.addEventListener("change" , () => {
    let getSelectNew = new getSelect();
    getSelectNew.busAsientos( $horaReserva.value );
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
