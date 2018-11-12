/*
// Variables 
var name = prompt("Enter your first name? "),
    lastName = prompt("Enter your last name? "),
    age = prompt("Enter your age? ");

console.log("Hi, my name is " + name + " " + lastName + ", and my age is " + age + ". Nice to meet you !");
*/

/*
// Area of circle
var r = +prompt("Enter radius of circle:");
var PI = 3.14;
var area = PI * r * r;
console.log("Your circle radius is " + r + " and the area of circle is " + area);
*/

// Variables and comparison
var hoursUser1 = +prompt("How many hours did User1 work : ");
var wageUser1 = +prompt("How much User1 earns for one hour :");
var hoursUser2 = +prompt("How many hours did User2 work : ");
var wageUser2 = +prompt("How much User2 earns for one hour :");
var totalUser1 = hoursUser1 * wageUser1;
var totalUser2 = hoursUser2 * wageUser2;

var boolean = totalUser1>totalUser2;
console.log("User1 earns more than user2 :" + boolean);