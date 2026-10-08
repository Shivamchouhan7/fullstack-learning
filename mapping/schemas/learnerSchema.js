const mongoose=require("mongoose")

const learnerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true
    },
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"
        }
    ]

});

const Learner=mongoose.model("Learner",learnerSchema);

module.exports=Learner;