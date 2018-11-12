// Objects
// var car = {
//     make: "Honda",
//     model: "Civic",
//     year: 2000,
//     mileage: [35000, 20000, 10000],
//     started: false,
//     start: function() {
//         this.started = true
//     },
//     drive: function () {
//         if (this.started) {
//             console.log("I am driving")
//         } else {
//             console.log("I am not driving!")
//         }

//     }
// };
// console.log(car);
// console.log(car.make);

// car.year = 2018; // update
// console.log(car);

// car.color = "Green"; // add property
// console.log(car);

// delete car.color;
// console.log(car);

// car.drive();
// car.start();
// car.drive();

// var car = new Object();

function Hotel (name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked
    };
}

var quayHotel = new Hotel("Quay", 40, 25);
var parkHotel = new Hotel("Park", 120, 77);


// // Create objects by template function
function person (name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

var person1 = new person("John", "Mike", 20);
var person2 = new person("Kevin", "Eric", 30);
var person3 = new person("Mary", "Hary", 20);
var person4 = new person("Alfred", "Betty", 20);

console.log(person1);

// Create a function construction named rectangle that accepts 2 parameters

function rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.area = function () {
        return this.width * this.height;
    }
}

var rectangle1 = new rectangle(4, 5);
var rectangle2 = new rectangle(54, 65);
var rectangle3 = new rectangle(12, 5);
var rectangle4 = new rectangle(7, 11);
console.log(rectangle1.area());
console.log(rectangle2.area());
console.log(rectangle3.area());
console.log(rectangle4.area());


function hostingPlan(name, monthlyPrice, diskSpace, dataTransfer, pages, discountMonth) {
    this.name = name;
    this.monthlyPrice = monthlyPrice;
    this.diskSpace = diskSpace;
    this.dataTransfer = dataTransfer;
    this.pages = pages;
    this.discountMonth = discountMonth;
    this.calculateAnnual = function (percentDiscount) {
        var bestprice = this.monthlyPrice;
        for (var i = 0; i < this.discountMonth.length; i++) {
            if (this.discountMonth[i] == 7 || this.discountMonth[i] == 8 || this.discountMonth[i] == 12) {
                bestprice = this.monthlyPrice * percentDiscount;
                break;
            }
        }
        return bestprice * 12;
    }

}

var plan1 = new hostingPlan("Basic", 3.99, 100, 1000, 10, [7, 8]);
var plan2 = new hostingPlan("Professional", 5.99, 500, 5000, 50, [7, 8, 12]);
var plan3 = new hostingPlan("Ultimate", 9.99, 2000, 20000, 500, [7, 8]);

console.log(plan1.calculateAnnual(0.8));
console.log(plan2.calculateAnnual(0.8));
console.log(plan3.calculateAnnual(0.8));

// Browser Object Model
var a = "apple";
console.log(isNaN(a)); // true
var b = "23";
console.log(isNaN(b)); // false
var c = "abc23";
console.log(isNaN(c)); // true
var d = " ";
console.log(isNaN(d)); // empty string space is 0 => false
var e = 23;
console.log(isNaN(e)); // false