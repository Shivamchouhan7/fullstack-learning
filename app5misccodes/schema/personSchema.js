const mongoose=require('mongoose');


const personSchema=new mongoose.Schema({
    name:String,
    mobile:String,
    filename:String,
    filetype:String,
    filepath:String

    // filedata:Buffer //To store the data in the database
});

const Person=mongoose.model("Person",personSchema);
 
module.exports=Person;