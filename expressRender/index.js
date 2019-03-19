const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

app.get('/home',(req,resp)=>{
    resp.render('home.ejs',{nome:"Danilo Martins",idade:14 });
    resp.status(200);
})
.listen(3000);