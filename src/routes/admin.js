const express = require("express");
const app = express();

app.get("/admin" , ( req, res ) => {

    res.send("Admin")
    
});

module.exports = app;