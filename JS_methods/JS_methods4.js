/********************************************************
 * Question-1 
 * How do you define an Array in JavaScript?
 */

let array1 = Array(5); 
let array2 = [];

/*********************************************************
 * Question-2
 * Read the entries of an array of 10 integers from a user. Compute x as the
 * average of the 10 entries and then compute the average of those entries that
 * are greater than or equal to x. Print this final average.
 */


function average() {
    let arr = [];
    let sum1 = 0, x = 0, sum2 =0, count = 0;
    for (let i = 0; i < 10; i++) {
        arr.push(Number(prompt(`Please enter ${i+1}. number`)));
        sum1 += arr[i];
    }
    x = Math.floor(sum1 / arr.length);
    for (let i of arr) {
        if (i >= x) {
            sum2 += i;
            count++;
        }
    }
    return Math.floor(sum2 / count);
}
console.log(average());

/*************************************************************
 * Question - 3
Write a JAVASCRIPT program that sets up an array of integers with capacity 20.
It should then generate the 20 entries randomly in turn.Each entry must be
an integer between l and 20, however it must also be different from all previous
entries in the array.Generate the entries as random numbers and repeatedly make
new numbers until a legal entry value is found.The program should finish
by printing the list of 20 array values that it has selected.
 * 
 */

function arrayTwenty() {
    let arr = [];
    let ranNum = 0;

    while (true) {
        ranNum = Math.floor((Math.random() * 20) + 1);
        if (arr.indexOf(ranNum) == -1) {
            arr.push(ranNum);
        } else if (arr.length == 20) {
            arr = arr.sort((a, b) => a - b);
            break;
        }
    }
    return arr;
}
console.log(arrayTwenty());