const mongoose = require('mongoose');// Modulo para conectarse a mongo

mongoose.connect('mongodb://localhost:27017/notes-db-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
}) // metodo de conexion a mongo
    .then(db => console.log('Conectado')) // Promesa
    .catch(err => console.error(err)); // Promesa