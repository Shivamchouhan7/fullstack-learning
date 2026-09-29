// rest (...) is used to represent an indefinite number of arguments as an array. It allows us to pass a variable number of arguments to a function.

// rest(...n) is used to collect 0 to n numbers of arguments....

function sum(...numbers) {
  console.log(numbers); // logs the array of numbers passed to the function
}   

sum()
sum(50,20)
sum(10,20,30)
sum(20)
sum(10,20,30,10,20,30,10,20,30,10,20,30,10,20,30,10,20,30)