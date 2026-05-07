let multiply=(a,b)=>{
    return a*b;
}

console.log(multiply(2,3)); 


let greet=(name='pyare')=>{ //default parameter
    return `Hello, ${name} uncle!`;
}
console.log(greet());
console.log(greet('Raju'));

let greeting=()=>{
    console.log("Hello!");
}
let runTwise = func=>{
    func();
    func();
}
runTwise(greeting);