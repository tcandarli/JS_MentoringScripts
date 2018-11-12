// Find the greatest number

let number1 = Number(prompt("Enter 1st number:"));
let number2 = Number(prompt("Enter 2nd number:"));
let number3 = Number(prompt("Enter 3rd number:"));

if (number1 > number2 && number1 > number3) {
    console.log("1st number " + number1 + " is the greatest number");

} else if (number2 > number1 && number2 > number3) {
    console.log("2nd number " + number2 + " is the greatest number");

} else {
    console.log("3rd number " + number3 + " is the greatest number");

}

