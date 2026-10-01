const getcon=require('./connection.js')

// function read(){
//     getcon.connect().then((ob)=>{
//         const {client,db}=ob;
//         db.collection('student').find().toArray().then((rec)=>{
//             console.log(rec);
//             client.close();
//         })
//     }).catch((err)=>console.log(err));
// }
// read();
async function read(){
    const {client,db}=await getcon.connect();
    const rec=await db.collection('student').find().toArray();
    console.log(rec);
    client.close();
}   

read();