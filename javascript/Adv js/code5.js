function add(a,b){
    console.log("Sum is : ",a+b);
}

function pro(a,b){
    console.log("Product is : ",a*b);
}

function calc(a,b,callback){
    callback(a,b);    
}


calc(50,20,add)
calc(50,20,pro)