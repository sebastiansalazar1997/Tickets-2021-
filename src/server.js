const express = require('express');
const app = express(); 
const path = require('path'); 
var bodyParser = require('body-parser');


app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


app.use(require('./routes/index.js'));
app.use(express.static(path.resolve(__dirname, './public')));
app.set('views', path.resolve(__dirname, 'public/views'));
// app.set('view engine', 'html');



// app.get("/test" , ( req , res ) => {
  // res.render("contacts.html")
  // res.sendFile('test.html', {root : __dirname + '/public/views'}); //Cuando no se utliza ningun motor de plantilla lo hacemos asi
// })




// app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Puerto conectado en ', 3000);
  });