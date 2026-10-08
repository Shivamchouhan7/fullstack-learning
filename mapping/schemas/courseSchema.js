const mongoose=require("mongoose")

const courseSchema=new mongoose.Schema({
    cname:{
        type:String,
        required:true,
        unique:true,
    },
    fees:{
        type:Number,
        required:true
    }
});

const Course=mongoose.model("Course",courseSchema);

module.exports=Course;