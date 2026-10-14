const router=require('express').Router();
const MyUser=require('../schemas/myUserSchema');

router.post('/register',async(req,res)=>{
    try{
        await MyUser.create(req.body);
        res.json({msg:"user registered successfully"});

    }
    catch(err){
        console.log(err);
        res.status(500).json({msg:"user registration failed"});
    }
})

router.post('/login',async(req,res)=>{
    try{
        const username=req.body.username;
        const password=req.body.password;
        const user = await MyUser.findOne({username,password});
        if(user){
            res.json("User logined Successfully");
        }
        else{
            console.log("Invalid Credentials.....")
        }
    }catch(err){
        console.log(err);
        res.json({status:500,msg:"user login failed"})
    }
});


module.exports=router;