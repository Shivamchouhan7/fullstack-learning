//Creating object for myntra product
let product={
    name:'shirt',
    price:500,
    type:'clothing',
    size:'M',
    brand:'peter england',
    'delivery-time':'2-3 days'
};
console.log("Product =",product);
console.log("Delivery time :",product["delivery-time"]);

// creating refrence for object and make changes in refrence variable and check changes in original variable
let product2=product;
product2.price=600;
console.log("Product after change in refrence variable =",product);

// destructuring object
let {name,price,type}=product;
console.log("Name :",name);
console.log("Price :",price);
console.log("Type :",type);

// Compare two objects 
let product3={
    name:'shirt',
    price:500,
    type:'clothing',
    size:'S',
    brand:'peter england',
    'delivery-time':'2-3 days'
}

function compareObjects(obj1,obj2){
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object'){
        return false;
    }
    if(obj1.name === obj2.name && obj1.price === obj2.price && obj1.type === obj2.type){
        return true;
    }
    return false;
}
console.log(compareObjects(product,product2));// why true because both are reference of same object
console.log(compareObjects(product,product3));

