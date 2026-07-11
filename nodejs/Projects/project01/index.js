const express=require('express');
const fs=require('fs');
const mongoose=require('mongoose');
const app=express();
const PORT=8000;

// Database connection
mongoose
.connect('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=>{console.log("MongoDB connected successfully")})
.catch((err)=>{console.log("MongoDB connection failed",err)});


// Schema creation
const userSchema=new mongoose.Schema({
    first_name: {
        type:String,
        required:true,
    },
    last_name: {
        type:String,
    },
    email: {
        type:String,
        required:true,
        unique:true,
    },
    job_title: {
        type:String,
    },
    gender: {
        type:String,
    },
    ip_address: {
        type:String,
    }

},{timestamps:true});
const User=mongoose.model('user',userSchema);

//Middleware
app.use(express.urlencoded({extended:false}));//to parse the incoming request body as urlencoded data
app.use(express.json());//to parse the incoming request body as JSON
//Routes

app.get('/users',async(req,res)=>{
    const allDbUsers=await User.find({});
    const html=`
    <ul>
    ${allDbUsers.map((user)=>`<li>${user.first_name}-${user.email}</li>`).join('')}
    </ul>`;
    return res.send(html);
});
app.get('/api/users',async(req,res)=>{
    const allDbUsers=await User.find({});
    res.setHeader('X-MyName','Shivam Chouhan');//custom header
    // Always add X in front of custom header name
    return res.json(allDbUsers);
});

// for this we can use app.route() method to combine all the methods for a single route
// app.get('/api/users/:id',(req,res)=>{
//     const id=Number(req.params.id);
//     const user=users.find((user)=>user.id===id);
    
//     return res.json(user);
// });
// app.patch('/api/users/:id',(req,res)=>{
//     // To Edit the user
//     return res.json({status:"pending"});
// });

// app.delete('/api/users/:id',(req,res)=>{
//     // To Delete the user
//     return res.json({status:"pending"});
// });

app.route('/api/users/:id')
.get(async(req,res)=>{
    const user =await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({
            status:"User not found"
        });
    }
    return res.json(user);
})
.patch(async(req, res) => {
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
})
.delete(async(req,res)=>{
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
    
});



app.post('/api/users',async(req,res)=>{
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
    
});




app.listen(PORT,()=> console.log(`Server started on port ${PORT}`));