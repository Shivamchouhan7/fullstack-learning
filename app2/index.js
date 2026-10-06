const express=require("express")
const mycon=require("./connection/connection")
const stdRouter=require("./routers/studentRouter")
const MongoClient=require("./models/studentModel")

const server=express();

server.use(express.json());
server.use("/std",stdRouter);

server.listen(8989,async()=>{
    await mycon();
    console.log("Server Starts.....")
})

