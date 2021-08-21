const express = require('express');
const path = require('path');
const hbs=require('hbs');

const app = express();

// environment variable for deployment but for local it uses 8000
const port=process.env.PORT || 8000;
// path to the folders for static web 
const staticPatch=path.join(__dirname,'../public');
const templatePath=path.join(__dirname,'../templates/views');
const partialsPath=path.join(__dirname,'../templates/partials');
console.log(staticPatch);
app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialsPath)
app.use(express.static(staticPatch));

app.get('/',(req,res)=>{
res.render('index');
});
// express roiting
app.get('/about',(req,res)=>{
res.render('about');
});
app.get('/weather',(req,res)=>{
res.render('weather');
});
app.get('*',(req,res)=>{
res.render('404error',{errorMsg:"Opps! page not found"});
});
app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
});