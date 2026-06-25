const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    return res.send('Welcome to home page ');
});

app.get('/about',(req,res)=>{
    return res.send(`hey you are ${req.query.name} and your age is ${req.query.age}`);
});

app.listen(3000,()=>{
    console.log('Server running ');
});

