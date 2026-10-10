const express=require('express');
const {connectToMongoDB}=require('./connect');
const URL=require('./models/url');
const staticRouter=require('./routes/staticRouter');
const path=require("path");
const urlRoute=require('./routes/url');


const app=express();
const PORT=8001;

connectToMongoDB('mongodb://localhost:27017/short-url')
.then(()=>{
    console.log('MongoDB connected');
})
.catch((err)=>{
    console.error('MongoDB connection error:', err);
});

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/url',urlRoute);
app.use('/',staticRouter);

// problem: why we need the ejs

// app.get('/test',async(req,res)=>{
//     const allUrls=await URL.find({});
//     return res.end(`
//         <html>
//   <head></head>
//   <body>
//     <ol>
//       ${allUrls.map((url) => `<li>${url.shortId} - ${url.redirectURL} - Visits: ${url.visitHistory.length}</li>`).join('')}
//     </ol>
//   </body>
// </html>
//         `)
// })

// Solution: EJS
app.get('/test',async(req,res)=>{
    const allUrls=await URL.find({});
    return res.render('home',{
        urls:allUrls,
    });//now we can use the ejs file to render the data in a more structured way
})
app.get('/url/:shortId',async (req,res)=>{
    const shortId=req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {shortId,

        },
        {$push:{
            visitHistory:{
                timestamp: Date.now(),
            },
        },
     });
     if(!entry){
        return res.status(404).json({error:"Short URL not found"});
     }
        res.redirect(entry.redirectURL);
});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});