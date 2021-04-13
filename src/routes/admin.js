const express = require("express");
const app = express();
const path = require('path')

app.get("/admin" , ( req, res ) => {
  res.sendFile('admin.html', {root :  path.join(__dirname , '../public/views')}); 
});

module.exports = app;