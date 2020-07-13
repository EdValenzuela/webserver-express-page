//creacion del server
const http = require('http');
// express facilita las conexiones
// (req) solicitudes
// (res) respuestas del servidor
http.createServer( (req, res) =>{

    res.writeHead(200, {'Content-Type':'application/json'});

    let salida = {
        nombre: 'eduardo',
        edad: 24,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();

})
.listen(8080);

console.log("escuchando al puerto");