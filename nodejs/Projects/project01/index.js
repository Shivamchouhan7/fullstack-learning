const express=require('express');
const {connectMongoDB}=require('./connection');
const{logReqRes} =require ('./midlewares');
const userRouter=require ('./routes/user');

const app=express();
const PORT=8000;

// Database connection
connectMongoDB('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=>{
    console.log('Database connected successfully');
})
.catch((err)=>{
    console.log('Database connection failed',err);
});

//Middleware -plugin
app.use(express.urlencoded({extended:false}));//to parse the incoming request body as urlencoded data
app.use(express.json());//to parse the incoming request body as JSON

app.use(logReqRes('log.txt'));

//Routes
app.use('/api/users',userRouter);


app.listen(PORT,()=> console.log(`Server started on port ${PORT}`));