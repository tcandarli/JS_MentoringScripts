
// If - else if - else statements
var grade1 = parseInt(prompt("Enter 1st grade (0-100): "));
var grade2 = parseInt(prompt("Enter 2nd grade (0-100): "));
var grade3 = parseInt(prompt("Enter 3rd grade (0-100): "));
var average = Math.round((grade1 + grade2 + grade3) / 3)

if (average >= 90 && average <= 100) {
    console.log("Your average grade is A");
} else if (average >= 80 && average <= 89) {
    console.log("Your average grade is B");
} else if (average >= 70 && average <= 79) {
    console.log("Your average grade is C");
} else if (average >= 60 && average <= 69) {
    console.log("Your average grade is D");
} else if (average >= 0 && average <= 59) {
    console.log("Your average grade is F");
} else {
    console.log("Your grades are out of range! Please try again")
}



