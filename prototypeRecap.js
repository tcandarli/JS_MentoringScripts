let obj1 = {};
let obj2 = new Object();

// console.log(obj2);

// JS engine top level function constructor Object()
// Top level prototype Object

console.log(obj1.__proto__ == obj2.__proto__)
console.log(obj1.__proto__ === Object.prototype)
