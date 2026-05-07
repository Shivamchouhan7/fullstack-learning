let number=[5,7];
console.log(number);
number.push(14); //add element at the end
console.log(number);
number.unshift(2); //add element at the beginning
console.log(number);
number.pop(); //remove element from the end
console.log(number);
number.shift(); //remove element from the beginning
console.log(number);
number.splice(1,0,10); //add element at specific index
console.log(number);
number.splice(1,1); //remove element from specific index
console.log(number);
number.splice(1,1,12);//replace element at specific index
console.log(number);

