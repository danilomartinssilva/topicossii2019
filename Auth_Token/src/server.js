const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/',(req,resp)=>{
    resp.json({
        message:"Tudo funcionando com API"
    })
})

app.post('/api/login', (req,resp)=>{
    const user = {
        id:1,
        login:"danilo",
        senha:"123456"
    }
    const chaveSecreta = "ueg";
  jwt.sign(user,chaveSecreta,{expiresIn:"10h"},(err,token)=>{
        resp.json({
            token
        })
  });  
})
app.use('/api/list',(req,resp,next)=>{    
          const bearer = req.headers["authorization"];
          if(bearer!==undefined && bearer!==""){
                const token = bearer.split(" ")[1];
                req.token = token;                
                next();   

          }
          else{
              resp.status(403).end();
          }
      })
app.post('/api/list',(req,resp,next)=>{
    jwt.verify(req.token,"ueg",(err,authData)=>{
        if(err){
            resp.status(403).end();
        }
        else{
            resp.json({
                message:"Você está logado",
                authData
            })
        }
    })    
    
})

//INTERCEPTADOR ==MIDDLEWARE


app.listen(3000);
