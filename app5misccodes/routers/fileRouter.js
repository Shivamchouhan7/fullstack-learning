const router=require ('express').Router();
const path=require("path");


router.post("/uploads",async(req,res)=>{
    try{
        const name=req.body.name;
        const file=req.files.fnm;
        console.log("Name is :",name);
        const filename=Date.now()+path.extname(file.name);//to maintain the unique name of the file
        const filepath=path.join(__dirname,"../uploads",filename);
        file.mv(filepath);
        res.json("File is uploaded successfully");

    }catch(err){
        console.log(err);
        res.json("Error while uploading file");
    }
})
module.exports=router;