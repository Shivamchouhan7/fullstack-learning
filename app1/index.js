const express= require('express');
const empRouter=require('./routers/EmpRouter');

const server=express();

server.use(express.json())
server.use('/emp',empRouter);

server.get('/',(req,res)=>{
    res.send("<h1 style='color:blue'>welcome to my first app...</h1>")
})



// server.get('/hello',(req,res)=>{
//     res.send("<h1 style='color:green'>hello brother</h1>")
// })
// server.get('/test/:name',(req,res)=>{
//     nm=req.params.name;
//     res.send("<h1 style='color:red'>hello "+nm+"</h1>")
// })

// server.get('/data',(req,res)=>{
//     nm=req.query.name;
//     age=req.query.age;
//     res.send(nm+" is "+age+" years old")
// })

server.listen(8989,()=>console.log('Server is running on port 8989'));