const mongoose=require("mongoose");

// const empSchema=new mongoose.Schema({
//     empno:Number,
//     ename:String,
//     desg:String,
//     sal:Number
// });

const empSchema=new mongoose.Schema({
    empno:{
        type:Number,
        required:true,
        unique:true
    },
    ename:{
        type:String,
        required:true
    },
    desg:{
        type:String,
        required:true
    },
    sal:{
        type:Number,
        required:true,
        min:20000,
        max:90000
    }
});

const Employee=mongoose.model("Employee",empSchema);

module.exports=Employee;