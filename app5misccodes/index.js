const express= require('express');
const fileupload = require('express-fileupload');
const path = require('path');
const fileRouter=require('./routers/fileRouter');
const personRouter=require('./routers/personRouter');
const mongoose=require('mongoose');


const server=express();

server.use(express.json());
server.use(fileupload());
server.use('/file',fileRouter); 
server.use('/person',personRouter);  

server.use(express.static(path.join(__dirname,'uploads')));

server.listen(8989,async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/acro");
        console.log("DB connected.....");

    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
    console.log("server started");
})