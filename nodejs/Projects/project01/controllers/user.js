const User = require('../models/user');

async function handleGetAllUsers(req, res) {
    const allDbUsers=await User.find({});
    return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {
    return res.status(404).json({
        status: "User not found",
    });
    }
    return res.json(user);
}

async function handleUpdateUserById(req, res) {
    try{
        const user =await User.findByIdAndUpdate(req.params.id,
        req.body,
        {
            new:true,
            runValidators:true
        });
        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }
        return res.status(200).json({
            message:"success",
            data:user
        });
    }
    catch(err){
        return res.status(500).json({
            message:"Failed to update user",
            error:err.message
        });
    }
}

async function handleDeleteUserById(req, res) {
    // To Delete the user
    try{
        const user=await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }
        return res.status(200).json({
            message:"User deleted successfully",
            DeletedUser:user
        });
    }
    catch(err){
        return res.status(500).json({
            message:"Failed to delete user",
            error:err.message
        });
    }
}

async function handleCreateNewUser(req, res) {
    //To create new user
    const body=req.body;
    if(!body || !body.first_name || !body.last_name || !body.email ||!body.gender || !body.ip_address ||!body.job_title){
        return res.status(400).json({msg:"Please provide all the required fields"});
    }
    const result = await User.create({
        first_name:body.first_name,
        last_name:body.last_name,
        email:body.email,
        gender:body.gender,
        ip_address:body.ip_address,
        job_title:body.job_title
    });
    console.log(result);
    return res.status(201).json({msg:"User created successfully",user:result});
}



module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
};