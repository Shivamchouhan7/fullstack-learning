const mongoose=require("mongoose")

const profileSchema=new mongoose.Schema({
    address:{
        type:String
    },
    mobile:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        unique:true
    }
});

const Profile=mongoose.model("Profile",profileSchema);

module.exports=Profile;