const {}=require("../service/auth");
async function restrictTologgedInUserOnly(req,res,next){
    const userUid=req.cookies.uid;
    if(!userId) return res.redirect("/login");
    const user=await getUser(userUid);
    if(!user) return res.redirect("/login");
    req.user=user;
    next();
}

module.exports={restrictTologgedInUserOnly};