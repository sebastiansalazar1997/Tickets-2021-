let $terminal = document.querySelector("#terminal");
let $cooperativa = document.querySelector("#cooperativa");

class getSelect {
    constructor(){}

    terminal = ( boolean ) =>{
        fetch("/" , { method : "POST" , 
        headers : { "Content-type" : "application/json" },
        body : JSON.stringify({ terminalSelect : boolean })
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

    cooperativas = (id) => {
        fetch("/" , { method : "POST" , 
        headers : { "Content-type" : "application/json" },
        body : JSON.stringify({ id })
        })
        .then( res => res.json() )
        .then( data => {
            this.imprimirCooperativas( data )
        });
    }

    imprimirCooperativas = ( data ) => {
        this.limpiarSelectCooperativas()
        for( let i = 0; i < data.length ; i++ ){
            $cooperativa.innerHTML += `<option value="${data[i].id_cooperativa}">${data[i].nombre}</option>`
        }
    }

    limpiarSelectCooperativas = () => {
        $cooperativa.innerHTML = ""
    }

     
}


$terminal.addEventListener("change" , () => {
    let getSelectNew = new getSelect();
    getSelectNew.cooperativas( $terminal.value );
});

let getSelectNew = new getSelect();
getSelectNew.terminal( true )