const express=require ('express');
const{handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}=require('../controllers/user');

const router=express.Router();

//Routes
router.route('/')
.get(handleGetAllUsers)
.post(handleCreateNewUser);

// for this we can use app.route() method to combine all the methods for a single route
// router.get('/:id',(req,res)=>{
//     const id=Number(req.params.id);
//     const user=users.find((user)=>user.id===id);
    
//     return res.json(user);
// });
// router.patch('/:id',(req,res)=>{
//     // To Edit the user
//     return res.json({status:"pending"});
// });

// router.delete('/:id',(req,res)=>{
//     // To Delete the user
//     return res.json({status:"pending"});
// });

router
.route('/:id')
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);


module.exports = router;