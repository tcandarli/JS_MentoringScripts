/*
// While loop runs the statement while (statement) is true
var count = 1;
while (count<2){
    console.log("Count is: " + count + " from while loop");
    count++;
}


var count = 1;
do {
    console.log("Count is: " + count + " from do while loop");
    count++;
} while(count<=2);

*/

/*
// While loops - Print "Hello" 10 times on the console

var counter = 0;
var message = "Hello! "
while (counter < 10) {
    console.log(message + " " + counter)
    counter++
}
*/

/*
// While loops - Print "Hello" 10 times on the console

var counter = 1;
while (counter++ < 10) {
    console.log("Hello " + counter);
}
*/

/*
// Initialize a variable with value 25 
// Weite a loop that will print "in the loop" while variables is more than 10

var counter = 25;
while (counter >= 10) {
    console.log(counter + " is in the loop");
    counter--;
}
*/
/*
// Write a program using while loop 
// that calculates the sum of even/odd numbers between 0 and 100
var number = 0;
var sumEvenNumbers = 0;
var sumOddNumbers = 0;
while (number <= 100) {
    if (number % 2 == 0) {
        sumEvenNumbers += number;
    } else {
        sumOddNumbers += number;
    }

    number++;
}
console.log("Sum of even numbers between 0 to 100 is " + sumEvenNumbers);
console.log("Sum of odd numbers between 0 to 100 is " + sumOddNumbers);
*/

/*
// while loops - Write a program that asks user to enter his/her 
// username and password until user enters correctly

var username = prompt("Please enter your username :");
var password = prompt("Please enter your password :");
var expectedUsername = "admin";
var expectedPassword = "123";

while (username != expectedUsername && password != expectedPassword) {
    username = prompt("Please enter your username :");
    password = prompt("Please enter your password :");

}
console.log("You are logged in succesfully!")

*/

/*
// while loops - Write a program that asks user to enter his/her 
// username and password until user enters correctly

var expectedUsername = "admin";
var expectedPassword = "123";

do {
    var username = prompt("Please enter your username :");
    var password = prompt("Please enter your password :");
}
while ((expectedUsername != username) && (expectedPassword != password));
console.log("You are logged in succesfully!")
*/


/* Write a guessing game where the user has to guess a secret number between 1-20
 ** After every guess, the program tells the user whether their number was too large
 ** or too small. The program will keep asking the user to enter the number until he finds
 ** the correct number.
 */

 /*

var randomNumber = 12;
var number = parseInt(prompt("Guess the number! (1 to 20)"));

do {
    if (number > randomNumber) {
        number = parseInt(prompt("Too large! Try again!"));
    } else {
        number = parseInt(prompt("Too small! Try again!"));
    }
} while (number != randomNumber);
console.log("Congratulations, you got it!")
*/

