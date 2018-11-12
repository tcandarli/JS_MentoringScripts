
let numberOfWaterMelon = 20;

if (numberOfWaterMelon >= 20) {
    console.log("I have 20 and more watermelon")
}


let firstName = "Mike";
let status = "Married";
if (status == "Married"){
    console.log(firstName + " is married");

}



// Ask user to enter temp. of room. Temp between 70 and 80 F is an ideal temp
let temperature = prompt("Enter the temperature :");
if (70 <= temperature <=80){
    console.log(temperature + " F is an ideal temp for coding!")
}



// Ask user to enter the age to check for vote.
let age = Number(prompt("Enter the age :"));
if (age>=18){
    console.log("Age " + age + " is eligible to vote!")
}



// Find the greatest number
var number1, number2, number3;
number1 = Number(prompt("Enter 1st number:"));
number2 = Number(prompt("Enter 2nd number:"));
number3 = Number(prompt("Enter 3rd number:"));

if (number1 > number2 && number1 > number3) {
    console.log("1st number " + number1 + " is the greatest number");

}
if (number2 > number1 && number2 > number3) {
    console.log("2nd number " + number2 + " is the greatest number");

}
if (number3 > number1 && number3 > number1) {
    console.log("3rd number " + number3 + " is the greatest number");

}


// Check two numbers
let number1, number2;
number1 = +prompt("Enter 1st number :");
number2 = +prompt("Enter 2nd number :");

if (number1 === number2) {
    console.log("The numbers are equal")

}

if (number1 !== number2) {
    console.log("The numbers are not equal")

}


// Calculate discount
let price = Number(prompt("Enter the price :"));
let quantity = Number(prompt("Enter the quantity :"));
let revenue = price * quantity;


if (revenue > 5000) {
    let discount = revenue * 0.1;
    let finalPrice = revenue - discount;
    console.log("You have %10 discount: " + discount + " Final Price :" + finalPrice)
}
if (revenue <= 5000) {
    let finalPrice = revenue;
    console.log("Final Price is : " + finalPrice)
}


// Else statement
let firstName = "Mike";
let status = "Single";
if (status == "Married") {
    console.log(firstName + " is married");

} else {
    console.log(firstName + " is single");
}


// Else statement
let numberOfWaterMelon = 10;

if (numberOfWaterMelon >= 20) {
    console.log("I have 20 and more watermelon")
} else {
    console.log("I don't have more than 20 watermelon")
}


// Check free shipping
let membership = prompt("Do you have a membership - Yes/No");
let orderAmount = Number(prompt("Enter order amount"));

if ((membership == "Yes") || (orderAmount > 40)) {
    console.log("You have free shipping");
} else {
    console.log("You don't have free shipping");
}

// Check two numbers
let number1, number2;
number1 = +prompt("Enter 1st number :");
number2 = +prompt("Enter 2nd number :");

if (number1 > number2) {
    console.log("First number " + number1 + " is greater than 2nd number " + number2);

} else if (number2 > number1) {
    console.log("Second number" + number2 + " is greater than 1st number  " + number1);

} else {
    console.log("Two numbers are same");

}

// Else statement
let time = +prompt("Enter the hour in 24h format :(e.g: 16");

if ((time > 00) && (time<12)) {
    console.log("Good morning!");
}
else if ((time >= 12) && (time < 15)) {
    console.log("Good afternoon!");
} else {
    console.log("Good eveining!");
}


// Check days
let day = +prompt("Enter the day number");

if (day==1) {
    console.log("Monday");
    
}
else if (day=2){
    console.log("Tuesday");
}
else if (day=3){
    console.log("Wednesday");
}
else if (day=4){
    console.log("Thursday");
}
else if (day=5){
    console.log("Fridday");
}
else if (day=6){
    console.log("Sameday");
}else {
    console.log("Sunday");
}
