// JavaScript Conditionals Statements

//  if statement
let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote");
}


//  if - else
let number = 7;

if (number % 2 === 0) {
    console.log("Number is Even");
} else {
    console.log("Number is Odd");
}


// if - else if - else
let marks = 75;

if (marks >= 90) {
    console.log("Grade: A");
}
else if (marks >= 70) {
    console.log("Grade: B");
}
else if (marks >= 50) {
    console.log("Grade: C");
}
else {
    console.log("Fail");
}


//  Nested if
let temperature = 30;

if (temperature > 25) {
    if (temperature < 35) {
        console.log("Weather is Pleasant");
    }
}


//  Switch Statement
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}