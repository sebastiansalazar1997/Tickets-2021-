let $terminalesSelect = document.getElementById("terminalesSelect");

class Registros {
    constructor(){
        this.id_terminal = ""
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

    getCooperativas = ( id_terminal ) => {

        fetch("/admin/registros-cooperativas" , { method : "POST" ,
        headers : { "Content-type" : "application/json" },
        body : JSON.stringify({ id_terminal : this.id_terminal })
        })
        .then( res => res.json() )
        .then( cooperativas => {
            console.log( cooperativas );
        });
        
    }
    
}
/* =========================================== */
/* ===================GET DATA================ */
/* =========================================== */
let newData = new Registros();
newData.getTerminales()
