let $_cajaRegistrosMain = document.querySelector("._cajaRegistrosMain");

class Reservas {
    constructor(){}

    getDetalleReserva = () => {
        fetch("/admin/registros-reservas" , { method : "POST" ,
        headers : { "Content-type" : "application/json" },
        body : JSON.stringify({ detalle_reserva :  true })
        })
        .then( res => res.json() )
        .then( detalle_reserva => {
            this.imprimirDetalle_reserva( detalle_reserva )
        });
    }

    imprimirDetalle_reserva = ( detalle_reserva ) => {
        for( let i = 0; i < detalle_reserva.length ; i++ ){
            $_cajaRegistrosMain.innerHTML += 
            `
            <div class="relative">
            <span class="material-icons deleteItem">delete</span>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <h6>
                                    Id
                                </h6>
                            </th>
                            <th>
                                <h6>
                                Cedula cliente
                                </h6>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                ${ detalle_reserva[i].id_reserva }
                            </td>
                            <td>
                                ${ detalle_reserva[i].cedula_cliente }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            `
        }
    }
     
}

let newDato = new Reservas();
newDato.getDetalleReserva()