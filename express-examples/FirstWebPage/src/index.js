const express = require("express");
const app = express();
const path = require('path');

// settings
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // express se entiende con ejs

// middlewares

// routes
app.use(require('./routes/index'));

// static fies

// listening 
app.listen(app.get('port'), () => {
    console.log("Server on por 4000");
});