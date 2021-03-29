const express = require('express');
const app = express(); 
const path = require('path'); 


app.use(express.static(path.resolve(__dirname, './public')));
app.use(require('./routes/index.js'));
app.set('views', path.resolve(__dirname , 'public/views'));
app.set('view engine', 'html');


// app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Puerto conectado en ', 3000);
  });