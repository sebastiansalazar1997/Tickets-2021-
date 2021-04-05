const express = require('express');
const app = express(); 
const path = require('path'); 
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.use(require('./routes/index.js'));
app.use(express.static(path.resolve(__dirname, './public')));
app.use(require("../src/routes/index"))




// app.get("/test" , ( req , res ) => {
  // res.render("contacts.html")
  // res.sendFile('test.html', {root : __dirname + '/public/views'}); //Cuando no se utliza ningun motor de plantilla lo hacemos asi
// })




// app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Puerto conectado en ', 3000);
  });