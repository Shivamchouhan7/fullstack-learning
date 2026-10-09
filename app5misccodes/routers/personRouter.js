const router=require("express").Router();
const person=require('../schema/personSchema');
const path=require("path");

router.post("/uploads",async(req,res)=>{
    try{
        const name=req.body.name;
        const mobile=req.body.mobile;
        const file=req.files.fnm;
        const filename=Date.now()+path.extname(file.name);
        const fpath=path.join(__dirname,"../uploads",filename);
        await file.mv(fpath);
        await person.create({
            name,mobile,filename,filetype:file.mimetype,filepath:fpath //mimetype is used to get the type of the file
        });
        res.json("Person's data added");
    }
    catch(err){
        console.log(err);
        res.json("File could not be loaded");
    }
})

router.get("/show/:id",async(req,res)=>{
    try{
        const data=await person.findById(req.params.id);
        if(!data)
            return res.json("No data found");

        res.json({
            name:data.name,
            mobile:data.mobile,
            filename:data.filename,
            type:data.filetype,
            image:"http://localhost:8989/"+data.filename
        });
    }
    catch(err){
        console.log(err);
        res.json("Error while fetching data");
    }
})
module.exports=router;