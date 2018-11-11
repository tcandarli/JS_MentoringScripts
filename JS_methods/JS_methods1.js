/**********************************
 * 1. What is variable? Please explain shortly.
 * 
 * In programming, a variable is a value that can change, 
depending on conditions or on information passed to the program. 
Typically, a program consists of instruction s that tell the computer 
what to do and data that the program uses when it is running.
 */

/****************************************
 * 2. Write a JAVASCRIPT program that asks you to enter:
   YourName, 
   Programming Language You are Learning,
   The School You Are Going,
   Start Date at School to Study,
   Company Name,
   Work Start Date,
   Job Title,
   Salary

   Print in the console:
   My name is "NAME". I started to study "LANGUAGE" in "SCHOOL" on "DATE". 
   I will start working in               "COMPANY" on "START_DATE" as a 
   "JOB_TITLE" with a salary of "SALARY"
 */

let answer = "";
let answers = [];
let questions = ["your name", "programming language you are learning",
  "the school you are going", "start date at school to study",
  "company name", "work start date", "job title", "salary"
];

for (let i = 0; i < questions.length; i++) {
  answer = prompt(`What is ${questions[i]} ?`);
  answers.push(answer);
};

console.log(`My name is ${answers[0]}. I started to study ${answers[1]} in ${answers[2]} on ${answers[3]}. 
I will start working in ${answers[4]} on ${answers[5]} as a ${answers[6]} with a salary of ${answers[7]}. `);

/********************************************
 * 3. Which one/ones is not a legal identifier in JAVASCRIPT and why?
  var P2_a%88$  // This is not valid. % can not be used as identifier.
  var 2l_apple; // Not valid. Identifiers can not start with numbers.
  var $12bh_kl; // Valid. Identifiers can start with $, _ or letter.
  var continue; // Not valid. Continue is s statement in JS.
  var _______; // Valid. Identifiers can include _ .

 */

/***********************************************
* 4. Write a JAVASCRIPT program that calculates BMI. 
Ask user to enter his/her weight in lb
Ask user to enter his/her height in inches
Convert weight lb to kg
Convert height inches to meter
Calculate BMI=Weight(in kg)/(height(in meter)*height(in meter))
Print in the console: Your BMI is "BMI"
*/

function getValues() {
  let weight = Number(prompt("Please enter your weight as lb"));
  let height = Number(prompt("Please enter your height as inches"));
  return calculateBMI(weight, height);
}

function calculateBMI(weight, height) {
  let kg = weight / 0.453592;
  let m = height * 0.0254;
  let BMI = kg / (m * m);
  return (`Your BMI is ${BMI.toFixed(2)}`);
}

console.log(getValues());

/******************************************************
 * 5. What will be the outputs of these codes?(do not use bracket or any other IDE)
   var a=10, b=0;
   console.log(!(a>b));  // false
   console.log((a>b) && (b==0)); // true
   console.log((a>b) && !(a==10)); // false
   console.log((a===b)||(!true)&&(b>a)); // false
 */