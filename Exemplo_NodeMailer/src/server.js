require('dotenv').config()
const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const configMail = require('./config');
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.urlencoded({
    extended:false

}))
app.use(cors());
app.use(bodyParser.json())

var transport = nodemailer.createTransport(configMail);

app.post('/enviar-email',(req,resp)=>{
    const text = req.body.text;
    const from = req.body.from;
    const to = req.body.to;
    const html = `<p>${text}</p>`;
    transport.sendMail(req.body,(err,info)=>{
        if(err){
            resp.json({
                message:JSON.stringify(err)
             }).status(404);                 
        }
        if(info){
            resp.json({
                message:JSON.stringify(info)
            }).status(200)
        }
    })
    
})


module.exports= app;