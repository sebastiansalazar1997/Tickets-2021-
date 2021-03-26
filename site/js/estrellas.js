const clasificacion = document.querySelector(".clasificacion");
clasificacion.addEventListener("click" , x =>{
    if( x.target.id != undefined ){
        let num = x.target.id
        let ultimoNum = parseInt(num[num.length - 1]);
        for( let i = 0 ; i <= ultimoNum; i++ ){
            let pintar = document.querySelector(`#estrella${i}`)
            console.log(pintar);
            pintar.setAttribute("style" , "color : orange" )
        }
        
    }
})
class Pintar{
    constructor(){}

    pintar( ultimoNum ){
        for( let i = 0 ; i <= ultimoNum; i++ ){
            let pintar = document.getElementById(`estrella${i}`)
            pintar.setAttribute("style" , "color : orange !important" )
        }
        this.guardarNum( ultimoNum )
    }

    despintar( ultimoNum ){
        let nuEstrellas = localStorage.getItem("numEstrellas");
        localStorage.setItem( "numEstrellas" , nuEstrellas - 1 )  ;
        for( let i = ultimoNum ; i <=  4 ; i++ ){
            let pintar = document.getElementById(`estrella${i}`)
            pintar.setAttribute("style" , "color : gray !important" )
        }

        
    }

    guardarNum( num ){
        localStorage.setItem( "numEstrellas" , num )
    }
}

clasificacion.addEventListener("click" , x =>{
    if( x.target.id != undefined ){
        let pintarEstrellasLocalStorage = localStorage.getItem("numEstrellas")
        let num = x.target.id   
        let ultimoNum = parseInt(num[num.length - 1]);
        let pintarNew = new Pintar
        pintarNew.pintar( ultimoNum )
        if( ultimoNum <= pintarEstrellasLocalStorage ){
            pintarNew.despintar( ultimoNum )
        }
    }
})

let pintarNew = new Pintar
let pintarEstrellasLocalStorage = localStorage.getItem("numEstrellas")
pintarNew.pintar( pintarEstrellasLocalStorage )
