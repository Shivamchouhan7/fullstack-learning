const router = require("express").Router();

let data=[
    {empno:101,ename:"Jay",desg:"prog",sal:45000},
    {empno:102,ename:"Kumar",desg:"tester",sal:35000},
    {empno:103,ename:"Ravi",desg:"manager",sal:55000},
    {empno:104,ename:"Ramesh",desg:"analyst",sal:40000},
    {empno:105,ename:"Rakesh",desg:"devops",sal:60000}
]

router.get('/list',(req,res)=>{
    res.json(data)
})
router.get('/save',(req,res)=>{
    rec=req.query;
    data.push(rec);
    res.json({result:"Data added successfully..."})
})
router.post('/save',(req,res)=>{
    rec=req.body;
    data.push(rec);
    res.json({result:"Data added successfully..."})
})

router.get('/search/:eno',(req,res)=>{
    eno=req.params.eno;
    ob=data.find(ob=>ob.empno==eno)
    if(ob){
        res.json({
            message:"Record found successfully ",
            record:ob
        })
    }
    else{
        res.json({
            message:"Record is not present in Database"
        })
    }
})

router.delete('/del/:eno',(req,res)=>{
    eno=req.params.eno
    record=data.find(ob=>ob.empno==eno)
    if(record){
        data=data.filter(ob=>ob.empno!=eno)
        res.json({
            message:"This record is deleted successfully",
            deletedRecord:record
        })
    }
    else{
        res.json({
            message:"record not found "
        })
    }
    
})
router.get('/count',(req,res)=>{
    count=0
    data.forEach(ob=>{
        count++
    })
    res.json({
        totalEmp:count
    })
})

module.exports=router;
