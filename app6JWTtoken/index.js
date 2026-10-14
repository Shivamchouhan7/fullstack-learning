const express=require("express");
const getCon=require("./config/connection");
const webRouter=require("./routers/webRouter");
const authRouter=require("./routers/authRouter");

const server =express();

server.use(express.json());
server.use("/web",webRouter);
server.use("/auth",authRouter);

server.listen(8989,async()=>{
    try{
        await getcon();
        console.log('server is running on port 8989');
    }catch(err){
        console.error('server failed to start:', err.message);
    }
});
