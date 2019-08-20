const express=require('express')
var router=express.Router();
var nodemailer=require('nodemailer')
var { User }=require('./user')

router.get('/',(req,res)=>{
    User.find((err,docs)=>{
        if(!err){res.send(docs)}
        else{
        console.log('error in retriving:'+JSON.stringify(err,undefined,2));}
        })
});
router.post('/send',function(req,res,next){
    var user=new User({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone
    })
    user.save((err,doc)=>{
        if(!err){
            res.send(doc);

        }else{
            console.log('error in saving:'+JSON.stringify(err,undefined,2))
        }
    })
    var transporter=nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'ythrinadh123@gmail.com',
            pass:'Chinni@123',
        }
    });
    var mailoptions={
        from:'"Thrinadh"<ythrinadh123@gmail.com>',
        to:req.body.email,
        subject:'regarding repair',
        text:"you have a submission from. 'Name:'+req.body.name+",
        html:"<p>you have succesfully created of<br> Name:"+req.body.name+"<br>email:"+req.body.email+"<br>Phone:"+req.body.phone+""
    }
    transporter.sendMail(mailoptions,function(error,info){
        if(error){
            return console.log(error);
        }
        console.log('meassage sent:'+info.response);
        res.redirect('/');
    })
})
module.exports=router;