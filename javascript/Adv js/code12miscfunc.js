x=[92,87,60,72,34,72,81]
// some() will return a bool value, it returns true , if any of the values will satisfy the condition.
// every() will return a bool value, it returns true , if all of the values will satisfy the condition.
function check(n){
    if(n<40)
        return true
}


// // res=x.some(check)
// res=x.every(check)

// res=x.some(n=>n<40)
res=x.every(n=>n>30)
console.log(res)