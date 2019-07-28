const express = require("express");
const app = express();

// settings
app.set('port', 4000);

// middlewares

// static fies

// listening 
app.listen(app.get('port'), () => {
    console.log("Server on por 4000");
});