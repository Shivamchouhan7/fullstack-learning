const router=require('express').Router();
const {author,Book,BookDetails,customer,Purchase}=require('../schemas/allSchema');

router.post('/saveAuthor',async(req,res)=>{
    try{
        const newAuthor=await author.create(req.body); 
        res.status(201).json(newAuthor); 
    }catch(err){
        res.status(500).json({message:err.message});
    }
});
router.post('/saveBook',async(req,res)=>{
    try{
        const book=await Book.create(req.body);
        res.status(201).json(book); 
    }catch(err){
        res.status(500).json({message:err.message});
    }
});
router.post('/saveBookDetails',async(req,res)=>{
    try{
        const book=await BookDetails.create(req.body);
        res.status(201).json(book); 
    }catch(err){
        res.status(500).json({message:err.message});
    }
});
router.post('/saveCustomer',async(req,res)=>{
    try{
        const data= await customer.create(req.body); 
        res.status(201).json(data); 
    }catch(err){
        res.status(500).json({message:err.message});
    }
});
router.post('/purchase',async(req,res)=>{
    try{
        const newAuthor=await Purchase.create(req.body);
        res.status(201).json(newAuthor);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/listPurchase',async(req,res)=>{
    try{
        // const data = await Purchase.find().populate('customer').populate('book);
        const data = await Purchase.find().populate('customer').populate({path:'book',populate:'author'});
        
        res.json(data);
    }catch(err){
        res.json({message:err.message});
    }
})
module.exports=router;