const router=require("express").Router();
const Course=require("../schemas/courseSchema")
const Learner=require("../schemas/learnerSchema")

router.post("/saveCourse",async(req,res)=>{
    try{
    await Course.create(req.body);
    res.json("Course added...")
    }catch(err){
        console.log(err);
        res.json("Course could not be added....");
    }
});

router.post("/saveLearner",async(req,res)=>{
    try{
    await Learner.create(req.body);
    res.json("Learner added...")
    }catch(err){
        console.log(err);
        res.json("Learner could not be added....");
    }
});

router.get("/learners",async(req,res)=>{
    try{    
        // const data=await Profile.find();
        const data=await Learner.find().populate("courses");
        res.json({data})
    }catch(err){
        res.json(err)
    }
})

module.exports=router;