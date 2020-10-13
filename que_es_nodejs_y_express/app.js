const http = require('http');
const hostname = 'localhost'; //127.0.0.1
const port = 3000;
// CREAMOS EL SERVER  
  //req -> son todas las peticiones que se le hace al servidor
  //res -> son todas las respuestas que haremos
const server = http.createServer((req, res) =>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola mundo');
})

// ponemos en escucha el servidor 
server.listen(port, hostname, () =>{
  console.log(`Servidor esta en ejecucion en http://${hostname}:${port}`);  
})