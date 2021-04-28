const express = require('express');
const { parse } = require('path');
const app = express();
const path = require('path'); 
const { regitrarFormulario } = require("../database")

app.set('views', path.resolve(__dirname, '../public/views'));
app.get( "/contacts" , ( req, res ) => {
    res.sendFile('contacts.html', {root :  path.join(__dirname , '../public/views')}); //Cuando no se utliza ningun motor de plantilla lo hacemos asi
})

app.post("/contacts" , async( req , res ) => {
    let body = req.body;
    // console.log(JSON.parse(body));
    console.log(body);
    // res.send("Vamos bien")
    //Expreciones regulares.
    let nameOk = /^\w{3,15}\s?(\w{3,15})?$/.test(body.name);
    let lastNameOk = /^\w{3,15}\s?(\w{3,15})?$/.test(body.last_name);
    let emailOk = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/g.test(body.email);
    let phoneOk = /^[+]?(593)?\s?(099|098)\d{7}$/.test(body.phone);  //Ejemplo -> "+593 0981111111" , no olives poner el numero entre comillas
    let messageOk = /^[a-zA-Z0-9]{5,500}$/.test(body.message);

    
    if( body.name == '' || body.last_name == '' ||  body.email == '' || body.phone == ''  || body.message == ''){
        res.send({ msg : "LLena todos los campos" , err : true })

    }else if(nameOk && lastNameOk && emailOk && phoneOk && messageOk){

            /* AQUI ES EN DONDE LOS DATOS YA ESTAN VALIDADOS, ENTONCES TENEMOS QUE GUARDARLOS */
            let datos = {
                phone : body.phone,
                nombres : body.name,
                email : body.email,
                apellidos : body.last_name,
                message : body.message
            }
            console.log("Good");
            res.send({ msg : "Tu mensaje a sido enviado correctamente" , err : false })
            // regitrarFormulario( datos )
            // res.redirect("back")
            // req.flash("willContact" , "esto es una peurbea")
            // res.render( "index.html" , { message : req.flash("willContact") })
            // res.sendDate(flash("willContact")); //Cuando no se utliza ningun motor de plantilla lo hacemos asi
        
    }else{
            /* AQUI ES EN DONDE CREAREMOS EL ERROR EN CASO LAS VALIDACIONES NO SEAN VERDADERAS */
            // req.flash("errContact" , "Este es un ejemplo")
            // res.send("You got it")
            // console.log("Oops!, a surgido un error, por favor intentalo mas tarde");
            res.send({ msg : "Asegurate de llenar llenar bien los campos" , err : true })

    }
    
    
    // console.log(body);
});
  
module.exports = app;
