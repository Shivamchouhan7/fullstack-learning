const mongoose = require('mongoose');

const myUserSchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true},
    role:{type:String,required:true}
});

const myUser=mongoose.model('myUser',myUserSchema);
module.exports=myUser;