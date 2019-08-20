const mongoose=require('mongoose');
var url='mongodb://localhost:27017/users';

mongoose.connect(url,{ useNewUrlParser: true },(err)=>{
    if(!err){
    console.log('mongoDB connected.....');
    }
    else{
    console.log('error in connecting:'+JSON.stringify(err,undefined,2));
    }
});
module.exports=mongoose;