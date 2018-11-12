// var string = "JavaScript";

// console.log(string.length);


// Dislay numbers of characters

// var name = "John";
// var lastName = "Tesla";

// console.log(name.length + lastName.length);


// // charAt()
// var string = "Java Script";

// console.log(string.charAt(2));  // v
// console.log(string.charAt(4));  // 
// console.log(string.charAt(7));  // r

// Display each character
// var myString = "Java Script";

// for (var i = 0; i < myString.length; i++) {
//     if (myString.charAt(i) != " ") {
//         console.log(myString.charAt(i));
//     }
// }

// concat() method
// var s1 = "Hello";
// var s2 = "World";
// var s3 = "JavaScript"
// var s4 = s1.concat(s2).concat(s3);
// console.log(s4);

// Generate password

var password = "";
var string1 = "";
var string2 = "";

function passwordCreate(string1, string2) {
    string1 = prompt("Enter string1");
    string2 = prompt("Enter string2");
    for (i = 0; i < 3; i++) {
        password = password.concat(string1.charAt(i));
    }
    return password.concat(string2.length);
}
var generatePassword = passwordCreate("Java", "Script");
console.log(generatePassword);