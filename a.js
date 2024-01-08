const server=require('express');
const bodyParser=require('body-parser');
const {spawn}=require('child_process');
const app=server();
const port=3000;
app.set("view engine","ejs");
app.engine('html',require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
  res.render('index.html')
});
app.get('/app',(req,res)=>{
  res.json("hello")
});


app.listen(port,()=>{
  console.log('listen 3000')
});
