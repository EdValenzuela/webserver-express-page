const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//nodemon server -e js,hbs,html,css para estar pendiente de estos archivos

//middleware instruccion o callback que se ejecuta siempre en la url que la persona pida
app.use(express.static(__dirname + '/public'));

//express hbs engine handlebars
//dirname todo el path
hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre : 'eduardo'
    });
})

app.get('/about', (req, res) => {

    res.render('about');
})
 
app.listen(port, ()=>{
    console.log(`escuchando peticiones en el puerto ${ port }`);
});