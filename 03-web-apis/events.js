// Events in javascript are actions that occur in the system you are programming, which the system tells you about so your code can respond to them. For example, when a user clicks a button, an event is generated. You can write code to listen for that event and execute a function when it occurs.

// Events in JavaScript

// click event
let btn= document.querySelector('#myButton');
let toggle=()=>{
    console.log('Button was clicked!');
}
btn.addEventListener('click',toggle);

// mouseover event
let box= document.querySelector('#myBox');
let changeColor=()=>box.style.backgroundColor='lightblue';
box.addEventListener('mouseover',changeColor);

// mouseout event
let resetColor=()=>box.style.backgroundColor='lightgray';
box.addEventListener('mouseout',resetColor);

// keydown event
let input= document.querySelector('#myInput');
let logKey=(event)=>{
    console.log(`Key pressed: ${event.key}`);
}
input.addEventListener('keydown',logKey);

// submit event
let form= document.querySelector('#myForm');
let handleSubmit=(event)=>{
    event.preventDefault();
    console.log('Form submitted!');
}
form.addEventListener('submit',handleSubmit);

// change event
let select= document.querySelector('#mySelect');
let logChange=(event)=>{
    console.log(`Selected value: ${event.target.value}`);
}
select.addEventListener('change',logChange);

// scroll event
window.addEventListener('scroll',()=>{
    console.log('Page is being scrolled!');
});

// resize event
window.addEventListener('resize',()=>{
    console.log('Window is being resized!');
}); 

// focus event
let inputField= document.querySelector('#myInput');
inputField.addEventListener('focus',()=>{
    console.log('Input field is focused!');
});

// blur event
inputField.addEventListener('blur',()=>{
    console.log('Input field lost focus!');
});

// input event
inputField.addEventListener('input',()=>{
    console.log(`Current input value: ${inputField.value}`);
});

let changeColorOnHover=()=>{
    btn.style.backgroundColor='lightgreen';
    btn.style.borderRadius='20px';
    
}

btn.addEventListener('mouseover',changeColorOnHover);

btn.addEventListener('mouseout',()=>{
    btn.style.backgroundColor='';
    btn.style.borderRadius='';
}); 



