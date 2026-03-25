// Local Storage
let product={
    name:'shirt',
    price:500,
    type:'clothing',
    size:'M',
    brand:'peter england',
};
// Storing data in localStorage
let productString=JSON.stringify(product);
localStorage.setItem('product',productString);
// 

console.log("Product stored in localStorage");
// Retrieving data from localStorage
let storedProductString=localStorage.getItem('product');
let storedProduct=JSON.parse(storedProductString);
console.log("Product retrieved from localStorage =",storedProduct);

// Removing data from localStorage
localStorage.removeItem('product');
console.log("Product removed from localStorage");

// Clearing all data from localStorage  
localStorage.clear();
console.log("All data cleared from localStorage");

// Note: localStorage only stores string data, so we need to convert objects to JSON strings before storing and parse them back when retrieving.