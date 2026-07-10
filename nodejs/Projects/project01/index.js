const express=require('express');
const fs=require('fs');
const app=express();
const users=require("./MOCK_DATA.json");
const PORT=8000;

//Middleware
app.use(express.urlencoded({extended:false}));//to parse the incoming request body as urlencoded data
app.use(express.json());//to parse the incoming request body as JSON
//Routes

app.get('/users',(req,res)=>{
    const html=`
    <ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join('')}
    </ul>`;
    return res.send(html);
});
app.get('/api/users',(req,res)=>{
    res.setHeader('X-MyName','Shivam Chouhan');//custom header
    // Always add X in front of custom header name
    return res.json(users);
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
.get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    if(!user){
        return res.status(404).json({
            status:"User not found"
        });
    }
    return res.json(user);
})
.patch((req, res) => {

    const id = Number(req.params.id);
    const body = req.body;

    const index = users.findIndex(
        (user) => user.id === id
    );
    if (index === -1) {
        return res.status(404).json({
            status: "User not found"
        });
    }
    users[index] = {
        ...users[index],
        ...body
    };
    fs.writeFile(
        "./MOCK_DATA.json",
        JSON.stringify(users, null, 2),
        (err) => {

            if (err) {
                return res.status(500).json({
                    status: "Failed to update user"
                });
            }

            return res.json({
                status: "Success",
                message: "User updated successfully",
                user: users[index]
            });

        }
    );

})
.delete((req,res)=>{
    // To Delete the user
    const id=Number(req.params.id);
    const index=users.findIndex(
        user=>user.id===id
    );
    if(index===-1){
        return res.status(404).json({status:"User not Found"});
    }
    users.splice(index,1);
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users,null,2),(err)=>{
        if(err){
            return res.status(500).json({
                status:"Failed to delete user "
            });
        }
        
        return res.json({
                status:'success',
                message:`User with id :${id} deleted successfully `
        });
        
    });
});



app.post('/api/users',(req,res)=>{
    //To create new user
    const body=req.body;
    if(!body || !body.first_name || !body.last_name || !body.email ||!body.gender || !body.ip_address ||!body.job_title){
        return res.status(400).json({msg:"Please provide all the required fields"});
    }
    users.push({id:users.length+1,...body});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users,null,2),(err,data)=>{
        if(err){
            return res.status(500).json({
                status:"Failed to create user"
            });
        }
        
        return res.status(201).json({
                status:"Success",
                message:"User created successfully",
                user:body
        });
        
    });
    
});




app.listen(PORT,()=> console.log(`Server started on port ${PORT}`));