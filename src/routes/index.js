const express = require('express');
const router = express.Router(); //Aqui definimos las rutas de nuestro servidor
const app = express()

 router.get( "/eje" , ( req, res ) => {
    res.render('index.html')
})

module.exports = router;
