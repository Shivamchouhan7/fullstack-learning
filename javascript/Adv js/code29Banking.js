let balance=20000;
console.log("You have total fund in your account rs.",balance);

function checkBalance(){
    return new Promise((res,rej)=>{
        if(balance>2000)
            res("Your total balance is : rs."+balance);
        else
            rej("Low balance : "+balance);
    });
};
function withdraw(amt){
    return new Promise((res,rej)=>{
        if(amt<=balance-2000){
            res("You have withdraw rs."+amt);
            balance=balance-amt;
        }else
            rej("You have not sufficient fund...u can withdraw upto rs."+(balance-2000));
    });
};
function deposit(amt){
    return new Promise((res,rej)=>{
        if(amt<=100000){
            res("U have deposit rs."+amt);
            balance=balance+amt;
        }else
            rej("U can not deposit more than 1 Lakh a day,and your excess amount "+(amt-100000));
    });
}

// promise chaining for withdrawal
// withdraw(19000).then(
//     (msg)=>{
//         console.log(msg);
//         return checkBalance();
//     }).then(
//         (msg)=>console.log(msg)
//     ).catch(
//         (msg)=>console.log(msg)
//     )

// async-await for withdraw
// async function calls(amt){
//     try{
//         let msg=await withdraw(amt);
//         console.log(msg)
//         msg=await checkBalance();
//         console.log(msg);
//     }catch(err){
//         console.log(err);
//     }
// }

// calls(25000);


// promise chaining for deposit
// deposit(175890).then(
//     (msg)=>{
//         console.log(msg);
//         return checkBalance();
//     }).then(
//         (msg)=>console.log(msg)
//     ).catch(
//         (msg)=>console.log(msg)
//     )

//async-await for deposit
async function calls(amt){
    try{
        let msg=await deposit(amt);
        console.log(msg)
        msg=await checkBalance();
        console.log(msg);
    }catch(err){
        console.log(err);
    }
}

// calls(50000)
calls(190820);