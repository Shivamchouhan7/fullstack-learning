const mongoose=require ("mongoose")

const getcon=async()=>{
   try{
    await mongoose.connect("mongodb://localhost:27017/acro");
    console.log("Name of Database :",mongoose.Connection.name)
    console.log("Host of Database :",mongoose.Connection.host)
    console.log("Host of Database :",mongoose.Connection.port)
    console.log("Database connected successfully");
   }catch(err){
    console.log("Error : "+ err.message);
    process.exit(1);
   }
}
module.exports={
    getcon,
};