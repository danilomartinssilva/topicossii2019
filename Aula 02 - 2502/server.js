const http =require('http');
http.createServer((req,resp)=>{
    const parametros = req.url.split('/');
    //console.log(parametros);
    resp.writeHead(200,{
        'Content-type': 'text/plain'
    });
    resp.write('Valor:'+ Fatorial(parametros[1]));
    resp.end();
}).listen(3000);

function Fatorial(a){    
    let sum =1
    for(let i=a;i>=1;i--){
        sum *= i;
    }
    return sum;
}
