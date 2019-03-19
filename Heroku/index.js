const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


  /* app.get('/home',(req,resp)=>{
      resp.send({message:'Opa'}).status(200).end()
  }) */
  app.set('view engine','ejs')
  app.use(express.static('./public')) 
  app.get('/about/:name',(req,resp)=>{
        
        resp.render('about',{name:req.params.name});
  })
  
.listen(port)

  
