const express =require('express');
const app = express();

app.get('/',(req,resp)=>{

 resp.json({message:"Tudo funcionando"}).status(200)

})
.listen(3001);
