const express = require('express');
const router = express.Router(); //Aqui definimos las rutas de nuestro servidor
const app = express()
const path = require('path'); 

 router.get( "/" , ( req, res ) => {
  res.sendFile('index.html', {root :  path.join(__dirname , '../public')}); //Cuando no se utliza ningun motor de plantilla lo hacemos asi
})

 router.get( "/about-us" , ( req, res ) => {
  res.sendFile('about-us.html', {root :  path.join(__dirname , '../public/views')}); //Cuando no se utliza ningun motor de plantilla lo hacemos asi
})

 router.get( "/contacts" , ( req, res ) => {
  res.sendFile('contacts.html', {root :  path.join(__dirname , '../public/views')}); //Cuando no se utliza ningun motor de plantilla lo hacemos asi
})

 router.get( "/blog" , ( req, res ) => {
  res.sendFile('blog.html', {root :  path.join(__dirname , '../public/views')}); //Cuando no se utliza ningun motor de plantilla lo hacemos asi
})


module.exports = router;
