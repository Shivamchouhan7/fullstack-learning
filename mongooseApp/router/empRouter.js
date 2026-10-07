const router=require("express").Router();
const Employee=require("../schemas/empSchema")

router.post("/save",async(req,res)=>{
    try{
    //     const emp=new Employee({
    //     empno:req.body.empno,
    //     ename:req.body.ename,
    //     desg:'prog',
    //     sal:req.body.sal
    // })
    // const result=await emp.save();
    // res.json(result)

    // const savedData=await new Employee(req.body).save();
    // res.status(201).json(savedData);


    const savedData=await Employee.create(req.body);
    res.json(savedData);

    }catch(err){
        console.log(err);
        res.json("Data not saved");
    }
    
})

router.post("/savemany",async(req,res)=>{
    try{
        // const savedData=await Employee.create(req.body);
        const savedData=await Employee.insertMany(req.body);
        res.json(savedData);
    }
    catch(err){
        console.log(err);
        res.json("Data not saved");
    }
})
router.get("/list",async(req,res)=>{
    try{
        const data=await Employee.find();
        res.json(data);
    }
    catch(err){
        console.log(err);
        res.json("Data not found");
    }
})
router.get("/list/:id",async(req,res)=>{
    try{
        const data=await Employee.findById(req.params.id);
        res.json(data);
    }
    catch(err){
        console.log(err);
        res.json("Data not found");
    }
})
router.get("/count",async(req,res)=>{
    try{
        const count=await Employee.countDocuments();
        res.json("Total number of records : "+count);
    }
    catch(err){
        console.log(err);
        res.json("");
    }
})
router.get("/sortBySal",async(req,res)=>{
    const data =await Employee.find().sort({sal:1});
    res.json(data);
})
router.get("/top5",async(req,res)=>{
    const data =await Employee.find().sort({sal:-1}).limit(5);
    res.json(data);
})

router.get("/findByDesg/:desg",async (req,res)=>{
    // const data=await Employee.find({desg:req.params.desg});
    const data=await Employee.find().where("desg").equals(req.params.desg);
    res.json(data);
})
router.put("/update/:id",async(req,res)=>{
        const data=await Employee.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(data);
})
router.delete("/delete/:id",async(req,res)=>{
    const data=await Employee.findByIdAndDelete(req.params.id);
    if(data){
        res.json("Record deleted successfully "+data);
    }
    else{
        res.json("Record not found");
    }
   
})
router.get("/findBySal/:sal/:desg",async(req,res)=>{
    const data =await Employee.find({desg:req.params.desg,sal:{$gt:req.params.sal}})
    res.json(data)
})
module.exports=router;