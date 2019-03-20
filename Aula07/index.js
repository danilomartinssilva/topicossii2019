const express = require('express')
const app = express();
const Axios = require('axios');
const port = process.env.PORT || 3000;
const urlApi = 'https://swapi.co/api/';

app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

app.get('/',(req,resp)=>{
    resp.send({message:'Olá'}).status(200);
})
app.get('/films',(req,resp)=>{
    const films = [];
    Axios.default.get(urlApi+'films')
    .then((coisa)=>coisa.data)
    .then((rows)=>{
         rows.results.forEach((row)=>{
            let id = Math.floor(Math.random() * (100 - 1) + 1);
            films.push({...row,id:id})
        })        
        resp.json(films); 
       
        
    })
    .catch((err)=>{
        resp.json({message:err})
    })
    
})
app.get('/films/:id',(req,resp)=>{
    const id = req.params.id;
    console.log("ID:", id)
    Axios.default.get(urlApi+'films/'+id)
    .then((data)=>data.data)
    .then((retorno)=>{
        resp.json({nome:"Danilo",...retorno});
    })
    .catch((err)=>{
        resp.json({message:"Erro"}).status(404);
    })
})

.listen(port);



