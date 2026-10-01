const getcon=require('./connection.js')

async function update(condition,obj){
    const {client,db}=await getcon.connect();
    const result=await db.collection('student').updateOne(condition,{$set:obj});
    console.log("record updated");
    console.log(result);
    client.close();
}

update({name:"bkl"},{age:23,city:"Mumbai"});