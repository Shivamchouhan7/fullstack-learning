const router=require("express").Router();
const Dept=require("../schemas/deptSchema")
const Employee=require("../schemas/empSchema")

router.post("/saveDept",async(req,res)=>{
    try{
    await Dept.create(req.body);
    res.json("Department added...")
    }catch(err){
        console.log(err);
        res.json("Department could not be added....");
    }
});

router.post("/saveEmp",async(req,res)=>{
    try{
    await Employee.create(req.body);
    res.json("Employee added...")
    }catch(err){
        console.log(err);
        res.json("Employee could not be added....");
    }
});

router.get("/emps",async(req,res)=>{
    try{    
        // const data=await Profile.find();
        const data=await Employee.find().populate("dept");
        res.json(data)
    }catch(err){
        res.json(err)
    }
})

module.exports=router;