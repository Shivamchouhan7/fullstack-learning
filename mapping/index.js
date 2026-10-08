const express=require ('express');
const allRouter=require ('./routers/allRouters')
const mycon=require('./configs/connection');
const {author,Book,BookDetails,customer,Purchase}=require('./schemas/allSchema');

const app=express();
app.use(express.json());
app.use('/all',allRouter);

app.listen(8989,async()=>{
    try{
        await mycon();
        console.log('server is running on port 8989');
    }catch(err){
        console.error('server failed to start:', err.message);
    }
});
