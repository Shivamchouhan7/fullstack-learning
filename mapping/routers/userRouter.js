const router=require("express").Router();
const User=require("../schemas/userSchema")
const Profile=require("../schemas/profileSchema")

router.post("/saveUser",async(req,res)=>{
    try{
    await User.create(req.body);
    res.json("User added...")
    }catch(err){
        console.log(err);
        res.json("User could not be added....");
    }
});

router.post("/saveProfile",async(req,res)=>{
    try{
    await Profile.create(req.body);
    res.json("Profile added...")
    }catch(err){
        console.log(err);
        res.json("Profile could not be added....");
    }
});

router.get("/profiles",async(req,res)=>{
    try{    
        // const data=await Profile.find();
        const data=await Profile.find().populate("user");
        res.json(data)
    }catch(err){
        res.json(err)
    }
})

router.get("/profile/:id",async(req,res)=>{
    try{    
        const data=await Profile.find({user:req.params.id}).populate("user");
        res.json(data)
    }catch(err){
        res.json(err)
    }
})



module.exports=router;