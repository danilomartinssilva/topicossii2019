const http  = require('http');
const fatorial = require('./fatorial');
http.createServer((req,resp)=>{
    resp.writeHead(200,
        {'Content-Type':'text/plain'}
        );
    const valor = req.url.split('/');
    const message = {resultado : fatorial.fatorial(valor[1])}
    resp.write('Resultado' +
                 fatorial.fatorial(valor[1]));
    resp.end();    
}).listen(2424);