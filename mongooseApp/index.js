const express=require("express")
const {getcon}=require("./config/connection")
const empSchema=require("./schemas/empSchema")
const router=require("./router/empRouter")

const server=express();
server.use(express.json())
server.use("/emp",router);

server.listen(8989, async()=>{
    await getcon();
    console.log("Server started");
})
