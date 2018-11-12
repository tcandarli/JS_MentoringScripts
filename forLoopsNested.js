
// Nested for loops
for(var i=0; i<3; i++){
    console.log("Outer loop at state: " + i + "\n");
    for (var p=1; p<3; p++){
        console.log("Inner loop at state: " + p);
        if (p==2){
            console.log("\n");
        }
    }
}


/* Write a program to print
*
**
***
****
*****
*/

// 
let sign = "";
let counter = +prompt("Please enter a number for stars :");
for (let row = 0; row <= counter; row++) {
    for (let column = 0; column < row; column++) {
        sign = sign + "*";
    }
    console.log(sign);
    sign = "";
}


for(var i=1; i<=5; i++){
    for(var p=1; p<=i; p++){
    console.log("*");
    }
    console.log("\n");
                
}
