let loginAdminButton = document.querySelector(".loginAdminButton");

loginAdminButton.addEventListener("click" , x => {
    let $email = document.adminForm.email.value; 
    let $password = document.adminForm.password.value; 
    fetch("/admin/login" , { method : "POST" ,
    headers : { "Content-type" : "application/json" },
    body : JSON.stringify({ email : $email , password : $password })
    })
    .then( res => res.text() )
    .then( data => {
        if( data == 'false' ){
           alert('Email o password incorrectos')
        }else{
            location.assign(`/admin?token=${data}`)
        }
    })
    .catch( x => {
        console.log('Opps a ocurrido un error');
    } );

});
