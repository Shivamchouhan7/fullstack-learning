const mongoose=require("mongoose")

const empSchema=new mongoose.Schema({
    ename:{type:String,required:true },
    sal:{ type:Number,required:true},
    dept:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Dept"  //many to one
    }
});

const Employee=mongoose.model("Employee",empSchema);

module.exports=Employee;