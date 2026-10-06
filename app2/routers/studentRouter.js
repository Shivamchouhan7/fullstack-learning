const router= require("express").Router()
const { ObjectId } = require("mongodb")
const StudentModel=require("../models/studentModel")


router.get("/list",async(req,res)=>{
    const data=await StudentModel.listStudent()
    res.json(data)
})

router.get("/search/:id",async(req,res)=>{
    const id=new ObjectId(req.params.id);
    const data=await StudentModel.search(id);
    res.json(data)
})
router.post("/save",async(req,res)=>{
    const data=req.body
    const msg=await StudentModel.saveData(data)
    res.json({msg:"data added successfully..",data:data})
})
router.put("/upd/:id",async(req,res)=>{
    const id=new ObjectId(req.params.id)
    const data=req.body
    const msg=await StudentModel.updById(id,data)
    res.json({msg:"data updated successfully..",data:data})
})
router.patch("/upd/:id",async(req,res)=>{
    const id=new ObjectId(req.params.id)
    const data=req.body
    const msg=await StudentModel.updById(id,data)
    res.json({msg:"data updated successfully..",data:data})
})



module.exports=router;
