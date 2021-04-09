let nameForm = document.getElementById("nombre");
let formularioReserva = document.querySelector("#formularioReserva").addEventListener("submit" , ()=> {
    if (nameForm.value) {
        alert("Su reserva a sido guardada con exito");
    }else{
        alert("Error");
    }
});