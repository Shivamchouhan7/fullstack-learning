const fs = require('fs');

// Synchronous write then read to avoid race condition
fs.writeFileSync('./file.txt', 'Hello World');
// const result = fs.readFileSync('file.txt', 'utf-8');
// console.log(result);


// const result = fs.readFile('file.txt','utf-8',(err,data)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// console.log(result); undefined, because readFile is asynchronous and does not return anything

// fs.appendFileSync('./file.txt','hey there');

// fs.unlinkSync('./file2.txt');//to delete file2.txt

// fs.cpSync('./file.txt','./file2.txt');//to copy file.txt to file2.txt

// console.log(fs.statSync('./file.txt').isFile); //true


// Blocking and non-blocking code

// Blocking code 
console.log("Start");
const data = fs.readFileSync('./file.txt', 'utf-8');
console.log(data);
console.log("End");  

// Non-blocking code
console.log("Start");   
fs.readFile('./file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    else{
        console.log(data);  

    }
});
console.log("End");

// Default thread pool size is 4
