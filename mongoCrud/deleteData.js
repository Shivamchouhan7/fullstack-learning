const getcon=require('./connection.js')

async function Delete(name){
    try{
    const {client,db}=await getcon.connect();
    const result=await db.collection('student').deleteOne(name);
    // console.log(result);
    if(result.deletedCount==0){
        console.log("record not found");
    }  
    else{
        console.log("record removed ");
        client.close();
    }}catch{(err)=>console.log(err)};
}

Delete({name:"Ravi"});