// rest must be the last parameter in the function definition. It collects all remaining arguments into an array.
// a function can have only one rest parameter. It must be the last parameter in the function definition.

// function show(...n,nm){
//     console.log("hello",nm);
//     for(v of n){
//         console.log(v);
//     }
// }
// show(1,2,3,4,5,"Shivam"); // logs "hello world" and then 1, 2, 3, 4, 5 on separate lines
// show(1,2,3,4,5,"Shivam","Hello"); // logs "hello world" and then 1, 2, 3, 4, 5 on separate lines

function show(nm,...n){
    console.log("hello",nm);   
    for(v of n){
        console.log(v);
    }
}

show("Shivam",1,2,3,4,5); // logs "hello Shivam" and then 1, 2, 3, 4, 5 on separate lines