const express = require('express');
const multer = require('multer');
const fs  = require('fs');

const app = express();
app.set('view engine','ejs');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        const dir = './upload';
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        } 
        cb(null,dir);
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
})

app.get('/',(req,resp)=>{
    resp.render('index');
})
const upload = multer({storage:storage}).array('files',12);

app.post('/upload',(req,resp,next)=>{
        upload(req,resp,(err)=>{
            if(err){
                return resp
                        .message({message:"Houve erro ao fazer o upload"});
            }
            resp.end("Upload completado");
        })    
})

app.listen(3000);

