const getcon=require('./connection.js')

async function insert(obj){
    const {client,db}=await getcon.connect();
    await db.collection('student').insertOne(obj);
    console.log("record inserted");
    client.close(); 
}

insert({name:"Ravi",age:22,city:"Pune"});