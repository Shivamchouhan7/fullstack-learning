// Function will be treated as variable
a=40
function hi(){
    console.log('Hi!!!!!!!!')
}


// p=a
let p=hi
console.log(p)
console.log(typeof(p))
p()


var add=function(a,b){
    console.log(a+b)
}

add(50,30)
console.log(add)

