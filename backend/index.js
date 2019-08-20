const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const {mongoose}=require('./db.js')
var usercontrol=require('./usercontrol.js')
var app=express();
app.use(bodyparser.json());
app.use(cors({origin:'http://localhost:4200'}));
app.use('/user',usercontrol)
app.listen(3000,()=>{
    console.log('server started at port 3000')
})
