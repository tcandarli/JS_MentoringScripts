function sayHello(){
    console.log("Hello");
}

for (var i=0; i < 100; i++){
    sayHello();
}


function sum() {
    var number1 = 45;
    var number2 = 78;
    var number3 = 89;
    var sum = number1 + number2 + number3;
    console.log(sum);
}
sum();


// mile - km converter
function convertKM() {

    var mile = parseInt(prompt("Please enter mile to convert km : "));
    var km = mile * 1.6;
    console.log(mile + " mile = " + km + " km")
}

convertKM();


// Compare numbers
function compareNumbers() {
    var number1 = parseInt(prompt("Enter first number :"));
    var number2 = parseInt(prompt("Enter second number :"));

    if (number1 > number2) {
        console.log("First one is bigger :" + number1)
    } else if (number2 < number1) {
        console.log("Second number is bigger: " + number2)
    } else if (number1 == number2) {
        console.log("Numbers are equal.")
    } else {
        console.log("Please enter numbers!")
    }
}
compareNumbers();




//functions with parameters
function calculateArea(width, height){
    var area = width *  height;
    console.log(area);
}
calculateArea(4,5);



// Calculate payment
function calculatePayment(hours, hourlyPay) {

    var total = hours * hourlyPay
    console.log("For " + hours + " hours the payment is : " + total)
}

calculatePayment(5, 30);



// functions - calculator
function calculator(number1, number2, sign) {
    var result = 0;
    if (sign == "+") {
        result = number1 + number2;
    } else if (sign == "-") {
        result = number1 - number2;
    } else if (sign == "*") {
        result = number1 * number2;
    } else if (sign == "/") {
        result = number1 / number2;
    }
    console.log("Result is : " + result);
}

calculator(4, 7, "+");
calculator(45, 15, "-");
calculator(6, 7, "*");
calculator(54, 9, "/");



// calculate age
function calculateAge(year) {
    var age = 2018 - year;
    console.log("Your age is : " + age);
}

calculateAge(1989);
calculateAge(1991);



// funtions - findGreatest
function findGreatest(number1, number2, number3) {

    if (number1 > number2 && number1 > number3) {
        console.log("The greatest number is : " + number1);
    } else if (number2 > number1 && number2 > number3) {
        console.log("The greatest number is : " + number2);
    } else if (number3 > number1 && number3 > number2) {
        console.log("The greatest number is : " + number3);
    } else if (number1 == number2 && number1 == number3) {
        console.log("Numbers are equal!")
    } else {
        console.log("Please try with valid numbers!")
    }
}

findGreatest(13, 18, 11);



// fahrenheit to celcius
function calculateCelcius(fahrenheit) {
    var celcius = (fahrenheit - 32) * 5/9;
    console.log(fahrenheit + " fahrenheit = " + celcius + " celcius");
}

calculateCelcius(70);




// calculate Average grade
function findAverage(grade1, grade2, grade3) {
    var average = (grade1 + grade2 + grade3) / 3;
    if (average >= 90 && average <= 100) {
        console.log("Average is " + average + ", grade is A");
    } else if (average >= 80 && average < 90) {
        console.log("Average is " + average + ", grade is B");
    } else if (average >= 70 && average < 80) {
        console.log("Average is " + average + ", grade is C");
    } else if (average >= 60 && average < 70) {
        console.log("Average is " + average + ", grade is D");
    } else if (average >= 0 && average < 60) {
        console.log("Average is " + average + ", grade is F");
    } else {
        console.log("Please enter valid numbers!");
    }
}
findAverage(99, 100, 98);
findAverage(10, 25, 55);
findAverage(76, 71, 79);
findAverage(180, 120, 140);



function findElement(myArray, element) {
    var found = false;
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] == element) {
            found = true;
        }
    }
    if (found == true) {
        console.log(element + " is found in the array!");
    } else {
        myArray.push(element);
        console.log(element + " is not found and added. New array is [" + myArray + "]")
    }
}
findElement(["Java", "phyton"], "Selenium");
findElement(["Java", "phyton"], "Java");
