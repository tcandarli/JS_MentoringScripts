// Functions with parameters
function makeTea(cups, tea) {
    console.log("Brewing " + cups + " cup of " + tea);
}

makeTea(3);
makeTea(3, "Early Grey");
makeTea(3, "Earl Grey", 5, "British");

// Return function
function calculateArea(width, height) {
    var area = width * height;
    return area;
}

var wallOne = calculateArea(3, 5);
var wallOne = calculateArea(8, 5);
console.log(wallOne);

function isChecked() {
    if (calculateArea(5, 8) > 15) {
        console.log("valid")
    } else {
        console.log("no valid");
    }
}


// Functions
function login(){
    var verified = true;
    return verified;
}

function buy(){
    if (verified == true){
        // buy
    }
}

// Functions
function addition(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

console.log(addition(7, 9));


function calculateAge(yearBirth) {
    var age = 2018 - yearBirth;
    return age;
}

function yearsUntilRetirement(name, year) {
    var retirement = 65-calculateAge(year);
    console.log(name + " retires in " + retirement + " years.")
}

yearsUntilRetirement("John", 1980);

// function overloading


function addTen(a){
    return a + 10;
}

function addTen(a, b) {
    return a + b + 10;
}

var result = addTen(100, 200);
console.log(result);

// Function statements vs Expressions


var area = function (width, height) {
    return width * height
}

var result = area(10, 20);
console.log(result);