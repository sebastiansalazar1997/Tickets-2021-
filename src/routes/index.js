const express = require('express');
const router = express.Router(); //Aqui definimos las rutas de nuestro servidor
const app = express()
const path = require('path'); 


app.use(require('./main.js'))
app.use(require('./contacto.js'))

app.get( "/about-us" , ( req, res ) => {
  res.sendFile('about-us.html', {root :  path.join(__dirname , '../public/views')}); //Cuando no se utliza ningun motor de plantilla lo hacemos asi
});

app.get( "/blog" , ( req, res ) => {
  res.sendFile('blog.html', {root :  path.join(__dirname , '../public/views')}); //Cuando no se utliza ningun motor de plantilla lo hacemos asi
});


module.exports = app;
