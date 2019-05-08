const express= require('express');
const Axios = require('axios');
const app = express();
const port = 3000 || process.env.PORT;

const url_films = 'https://swapi.co/api/films';

app.set('view engine','ejs')
app.use(express.static(__dirname+'/public'));

app.get('/films',(req,resp)=>{
    const films = [];
    
     Axios.default.get(url_films)
        .then((data)=>data.data)
        .then((json)=>{
            json.results.forEach((row)=>{
                
                films.push({title:row.title});
               
            })
            resp.render('films',films);
            
        }) 
})
app.get('/films/:id',(req,resp)=>{
    const id = req.params.id;
    console.log(id);
    
    Axios.default.get(url_films)
    .then((data)=>data.data)
    .then((json)=>{
     resp.end();
        /* resp.json(json).status(200) */
            /* resp.render('films',json); */
    })
           
       
})


.listen(port)