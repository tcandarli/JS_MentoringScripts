// shift() method 
// Removes the first element from array

var myFish = ["angel", "lepistes", "clown", "mandarin", "surgean"];
console.log(myFish);


myFish.shift(); // removes "angel"
myFish.shift(); // removes "lepistes"

for (var i=0; i<myFish.length; i++) {
    console.log(myFish[i]);
}


var shifted = myFish.shift();
console.log(myFish);


var x = Array(10);
console.log(x[0]);


// Write a shile loop that every iteration will remove the next element
// from the array, until it is empty.


var names = ["Andrew", "Edward", "Paul", "Chris", "John"];
while (names.length > 0) {
    console.log(names);
    names.shift()
    }
console.log(names);



var names = ["Andrew", "Edward", "Paul", "Chris", "John"];
while (names.length != 0) {
    console.log(names);
    names.shift()
} console.log(names);



var names = ["Andrew", "Edward", "Paul", "Chris", "John"];
while (i=names.shift() != undefined) {
    console.log(names);
    console.log(i);
}


// splice() method
// remove elements from array


var scores = ["red", "green", "blue"];

console.log(scores.splice(1, 1)); //  if there are two arguments it removes item. Starts from index 1 and removes 1 item

console.log(scores.splice(2, 0, "yellow")); // If there are 3 arguments and second is 0, 
console.log(scores);                        // splice inserts a new item while second parameter is 0

var languages = ["C", "C++", "Java", "Javascript"];
languages.splice(2, 1, "Python");  // Removes 1 item, insert 1 item, removes "Java", inserts "Phyton"
console.log(languages);



// Task - 2 - splice() method
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
// 1. Insert "drum" as 2nd item
//["angel", "clown", "drum", "mandarin", "sturgeon"]
myFish.splice(2, 0, "drum"); 
console.log(myFish);

// 2. Remove "mandarin" 
// ["angel", "clown", "drum", "sturgeon"]
myFish.splice(3, 1);
console.log(myFish); 

// 3. Remove "drum", insert "trupmet"
// ["angel", "clown", "trumpet", "sturgeon"]
myFish.splice(2, 1, "trumpet"); 
console.log(myFish); 

// 4. Remove "angel", "clown" insert "parrot", "anemone", "blue"
// ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
myFish.splice(0, 2, "parrot", "anemone", "blue"); 
console.log(myFish); 

// 5. Remove "blue", "trompet"
// ["parrot", "anemone", "sturgeon"]
myFish.splice(2, 2);
console.log(myFish);

// 6. Remove "anemon"
//  ["parrot", "sturgeon"]
myFish.splice(1, 1);
console.log(myFish); 


// Arrays - slice() method
// Returns a copy of a portion of array. Original will not change


var animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2)); // camel, duck, elephant
console.log(animals.slice(2,4)); // camel, duck. 4th will not be included
console.log(animals.slice(1,5)); // bison, camel, duck, elephant



// Task 3 -  Arrays , slice() method
var animals = ["dog", "cat", "monkey", "donkey", "dino", "elephant"];

// 1. ["dog", "cat", "monkey", "donkey", "dino", "elephant"]
console.log(animals.slice(0));

// 2. ["cat", "monkey", "donkey", "dino", "elephant"] 
console.log(animals.slice(1));

// 3. ["elephant"]
console.log(animals.slice(5));

// 4. ["dino", "elephant"] 
console.log(animals.slice(4));

// 5. ["dog"] 
console.log(animals.slice(0, 1));

// 6. ["dog", "cat"] 
console.log(animals.slice(0, 2));

// 7. [] 
console.log(animals.slice(0, 0));

// 8. ["monkey"] 
console.log(animals.slice(2, 3));

// 9. ["monkey", "donkey", "dino"] 
console.log(animals.slice(2, 5));



var animals = ["dog", "cat", "monkey", "donkey", "dino", "elephant"];

console.log("1- ["+animals.slice(0)+"];");
console.log("2- ["+animals.slice(1)+"];");
console.log("3- ["+animals.slice(5)+"];");
console.log("4- ["+animals.slice(4)+"];");
console.log("5- ["+animals.slice(0,1)+"];");
console.log("6- ["+animals.slice(0,2)+"];");
console.log("7- ["+animals.slice(0,0)+"];");
console.log("8- ["+animals.slice(2,3)+"];");
console.log("9- ["+animals.slice(2,5)+"];");



// arrays - indexOf(), lastIndexOf()

var scores = [10, 20, 30, 10, 40, 20];
console.log(scores.indexOf(30)); // 2 - returns the indexOf 30
console.log(scores.indexOf(50)); // -1 - returns -1 if there is no item in array
console.log(scores.lastIndexOf(20)); // 5 - returns lastIndexOf 20 

console.log(scores.indexOf(10,2)); // 3 - index of 10 starting from the 2nd item 
console.log(scores.indexOf(20,-1)); // 5 - fromIndex = 6 + (-1) = 5
console.log(scores.indexOf(20,-5)); // 1 - fromIndex = 6 + (-5) = 1



var beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison"));  // 1
console.log(beasts.indexOf("bison", 2)); // 4
console.log(beasts.indexOf("giraffe")); // -1
console.log(beasts.indexOf("camel", -3)); // 2
console.log(beasts.indexOf("camel", -4)); // 2



// lastIndexOf()
var scores = [10, 20, 30, 10, 40, 20];
console.log(scores.lastIndexOf(10)) // 3 - looking for last 10 
console.log(scores.lastIndexOf(20)) // 5 - 
console.log(scores.lastIndexOf(50)) // -1



// Task 
var numbers = [2, 5, 9, 2];
console.log(numbers.lastIndexOf(2)); // 3
console.log(numbers.lastIndexOf(7)); // -1
console.log(numbers.lastIndexOf(2, 3)); // 3
console.log(numbers.lastIndexOf(2, 2)); // 0
console.log(numbers.lastIndexOf(2, -2)); // 0
console.log(numbers.lastIndexOf(2, -1)); // 3


// sort() method - sorts alphabetically or by numbers


var months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months); // ["Dec", "Feb", "Jan", "March"]

var animals = ["Cat", "ant", "Bee", "elephant", "Ant"];
console.log(animals.sort()); // ["Ant", "Bee", "Cat", "ant", "elephant"]

var array1 = [1, 30, 4, 21];
console.log(array1.sort()); // [1, 21, 30, 4]

var mixArray = ["cat", "Ant", 3, "elephant", "Bee", -1, 67, -13]; //
console.log(mixArray.sort()); // [-1, -13, 3, 67, "Ant", "Bee", "cat", "elephant"]



var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var element = "a";

for (var i = 0; i < array.length; i++) {

    if (array[i] == element) {
        indices.push(array.indexOf(element, i));
    }
}
console.log(indices); //[0, 2, 4];



var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var element = "a";

for (var i = 0; i < array.length; i++) {

    if (array[i] == element) {
        indices.push(i);
    }
}
console.log(indices); //[0, 2, 4];


