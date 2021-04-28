const submit = document.querySelector("#bsubmit");
let form_1_name = document.querySelector("#form-1-name");
let form_1_last_name = document.querySelector("#form-1-last-name");
let form_1_email = document.querySelector("#form-1-email");
let form_1_phone = document.querySelector("#form-1-phone");
let form_1_message = document.querySelector("#form-1-message");
let $htmlAlert = document.querySelector(".alertasPost");
submit.addEventListener("click" , () => {
    // console.log("bien");
    //validar campos

    //mandarSolicitud
    fetch("/contacts" , { method : "POST" , 
    headers : { "Content-type" : "application/json" },
    body : JSON.stringify({name : form_1_name.value , last_name : form_1_last_name.value , email : form_1_email.value , phone : form_1_phone.value , message : form_1_message.value })
    })
    .then( res => res.text() )  //Aqui es en dodne rescibimos la informacion si vamos arecibir ifnromacion en forma de json, cambiamos text por json
    .then( data => {
        let resDB = JSON.parse(data);

        if (resDB.err) {
            $htmlAlert.innerHTML = `<div class="alert alert-danger" role="alert">${ resDB.msg }</div>`
        }else{
            $htmlAlert.innerHTML = `<div class="alert alert-primary" role="alert">${ resDB.msg }</div>`
        }
        // alert(data)
    });
    //mostrar mensaje de error o exito
    //actulizar los datos
});

// function ejemplo(){
//     fetch('/contacts' , { method : "GET" } )
//     .then( res =>  res.json() )
//     .then( data => {
//         const eje = document.querySelector("#ejemplo");
//         let html = "";
//         data.ejemplo.forEach( x => {
//             html += `<div>${x.ejemplo}</div>`
//         } )

//         eje.innerHTML = html;
        
//     });
// }

// const url = 'https://swapi.co/api/people/1/'
// const http = new XMLHttpRequest()

// http.open("GET", url)
// http.onreadystatechange = function(){

//     if(this.readyState == 4 && this.status == 200){
//         var resultado = JSON.parse(this.responseText)
//         console.log(resultado.name)
//     }
// }
// http.send()

// let boton = document.querySelector("#formulario").addEventListener( "submit" , () => {
//    console.log("dentro"); 
//    let message = !JSON.stringify("willContact");
//    console.log(message);
// } )

// let eventSource = new EventSource("/contacts")
// eventSource.onmessage = function(event){
//     var response = JSON.parse(event.data);
//     console.log(response );
// }
