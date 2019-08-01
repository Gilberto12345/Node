const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

// Initializations
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); // Configurar la ruta de las views
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
})); //Configuracion del motor de vistas
app.set('view engine', '.hbs');// Asiciando el motor de vistas

// Midlewares
app.use(express.urlencoded({ extended: false })); // Midleware para poder interpretar las urls amigables
app.use(methodOverride('_method')); // Midleware para poder utilizar metodos put, delete etc
app.use(session({
    secret: 'mysecreteapp',
    resave: true,
    saveUninitialized: true
})); // Midleware para utilizar sessiones 

// Globla Variables

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Server init

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});