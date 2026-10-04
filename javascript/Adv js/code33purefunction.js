// impure function

let c=10
function isum(a,b){
    c++;
    console.log("Sum is : ",(a+b+c))
}

// pure function
function psum(a,b){
    console.log("Sum is : ",(a+b))
}

isum(50,20)
isum(50,20)
console.log("-------------------")
psum(50,20)
psum(50,20)