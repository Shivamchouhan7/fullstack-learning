const getcon=require('./connection.js')

async function search(name){
    const {client,db}=await getcon.connect();
    const res=await db.collection('student').findOne(name);
    if(res==null){
        console.log("record not found");
    }
    else{
        console.log(res);
    }
}
search({name:"Kabir Mehta"});