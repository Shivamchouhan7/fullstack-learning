const mongoose=require('mongoose');

const authorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
});

const author=mongoose.model('Author',authorSchema);

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Author'
    }
});

const Book=mongoose.model('Book',bookSchema);

const bookDetailsSchema= new mongoose.Schema({
    publisher:{
        type:String,
        required:true
    },
    pages:{
        type:Number,
        required:true
    },
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book'
    }

});

const BookDetails=mongoose.model('BookDetails',bookDetailsSchema);

const customerSchema=new mongoose.Schema({
    name:{type:String,required:true},
    mobile:{type:String,required:true},
});

const customer=mongoose.model('Customer',customerSchema);

const purchaseSchema=new mongoose.Schema({
    customer:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    }],
    book:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book'
    }],
});

const Purchase=mongoose.model('Purchase',purchaseSchema);

module.exports={author,Book,BookDetails,customer,Purchase};