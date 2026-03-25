// JSON 
let product={
    name:'shirt',
    price:500,
    type:'clothing',
    size:'M',
    brand:'peter england',
    'delivery-time':'2-3 days'
};
console.log("Product =",product);

// Convert object to JSON string
let jsonString=JSON.stringify(product);
console.log("JSON String =",jsonString);

// Convert JSON string back to object
let jsonObject=JSON.parse(jsonString);
console.log("JSON Object =",jsonObject);