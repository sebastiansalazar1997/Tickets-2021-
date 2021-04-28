const express = require('express');
const app = express(); 
const path = require('path'); 
const flash = require("connect-flash");
const sesion = require("express-session");
require("./mailer");



app.use(
  sesion({
    secret : 'claveSecretaTickets',
    resave: false,
    saveUninitialized: false,
  })
)

app.use(flash())

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// app.use((req, res, next) => {
//   console.log(app.locals.willContact = req.flash('willContact')[0]);
//   next();
// });

app.use(require('./routes/index.js'));
app.use(express.static(path.resolve(__dirname, './public')));
// app.use(require("../src/routes/index"));




app.listen(3000, () => {
    console.log('Puerto conectado en ', 3000);
  });