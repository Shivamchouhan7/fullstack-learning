const express=require('express');
const app=express();
const users=require("./MOCK_DATA.json");
const PORT=8000;

//Routes

app.get('/users',(req,res)=>{
    const html=`
    <ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join('')}
    </ul>`;
    return res.send(html);
});
app.get('/api/users',(req,res)=>{
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
    
    return res.json(user);
})
.patch((req,res)=>{
    // To Edit the user
    return res.json({status:"pending"});
})
.delete('/api/users/:id',(req,res)=>{
    // To Delete the user
    return res.json({status:"pending"});
});



app.post('/api/users',(req,res)=>{
    //To create new user
    return res.json({status:"pending"});
});




app.listen(PORT,()=> console.log(`Server started on port ${PORT}`));