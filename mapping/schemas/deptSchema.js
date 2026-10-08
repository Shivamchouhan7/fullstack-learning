const mongoose=require("mongoose")

const deptSchema=new mongoose.Schema({
    dname:{
        type:String,
        required:true,
        unique:true,
    },
    location:{
        type:String,
        required:true
    }
});

const Dept=mongoose.model("Dept",deptSchema);

module.exports=Dept;