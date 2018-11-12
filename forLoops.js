
// For repeated actions we use loop

for (let i=0; i<10; i++){
    console.log(i + "javascript");
    
}



for (let i=1; i<=10; i+=2){
    console.log(i);
    
}


// Print all numbers between 0 and fifty that are divisible by 4
for (let i=0; i<=50; i++){
    if (i%4 == 0){
        console.log(i);
    
    }
}


// Print all numbers between 0 and fifty that are divisible by 4
for (let i=4; i<=50 && i%4==0; i+=4){
        console.log(i);
    
    }


// Print all numbers from 100 to 0 which are divisible by 3
for (var i = 100; i >= 3; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }

}



// Print all numbers from 100 to 80 which are divisible by 3
for (var i = 100; i >= 80; i--) {
    if (i % 3 === 0) {
        console.log(i + " is divisible by 3");
    } else {
        console.log(i + " is not divisible by 3!")
    }

}


for(var i=100;i>80;i--){
    if(i%3==0){
        console.log(i+" is divisible by 3");
    }else{
        console.log(i+" is not divisible by 3");
    }



// Comparison of 2 numbers by using for loops
var counter = +prompt("How many times do want to repeat the comparison of 2 numbers?");
for (let i = 0; i < counter; i++) {
    var number1 = +prompt("Please enter first number  :");
    var number2 = prompt("Please enter second number  :");
    if (number1 > number2) {
        console.log("First number " + number1 + " is greater than second number " + number2);
    } else if (number1 < number2) {
        console.log("First number " + number1 + " is smaller than second number " + number2);
    } else if (number1 === number2){
        console.log("First number " + number1 + " is equal to second number " + number2);
    }
}


// Write a program that displays each even/odd number in popup between 1 and 32
var number = +prompt("Please enter a number to find even and odd numbers :");
for (i = 1; i <= number; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd")
    }
}



// Let user to enter 5 numbers and print the total of those numbers
var total = 0;
for (var counter = 0; counter < 5; counter++) {
    var number = +prompt("Enter a number");
    total = total + number;
}
console.log("Sum of 5 numbers you have entered is " + total);



// Write a program that prompts the user to input an integer.
// It should then print the multiplication table of that number.
var number = +prompt("Pleae enter a number for multiplication table :")
for (i = 1; i <= 10; i++) {
    var multiplication = number * i;
    console.log(number + "*" + i + "=" + multiplication);
}


// Write a program to calculate the sum of following series where n is input by user 
// 1 + 1/2 + 1/3 + 1/4 + .. +1/n

let number = +prompt("Please enter a number for calculation :");
let sum = 0;

for (let i = 1; i <= number; i++){
    sum += 1 / i;
};


console.log(`The sum of n number serie as (1 + 1/2 + 1/n) is  + ${sum}`);