
//add two numbers
let num1 = 560
let num2 = 799
let num3 = num1 + num2
console.log(num3);

//subtract two numbers
let numsub3 = num1 - num2
console.log(numsub3);

//Multiply two numbers
let num_mul3 = num1 * num2
console.log(num_mul3);


//devide two numbers
let num_dev3 = num1 / num2
console.log(num_dev3);

//find the remainder of two numbers 
let num_rem3 = 3%2
console.log(num_rem3);


//use the += operator to add a number and log the result
let add = 2;
add += add;
console.log(add);


//use the -= operator to subt a number and log the result
let sub = 2;
sub -= sub;
console.log(sub);

//comparison operators
let compare1 = 3;
let compare2 = 2;
let result2 = compare1 > compare2;
console.log(result2);

//comparison operators using ==
let compare3 = 3;
let compare4 = 2;
let result3 = compare3 == compare4;
console.log(result3);


//logical operators
//program that uses && --and combine two conditions


let log_1 = 40
let log_2 = 30
let log_3 = 50
if(log_1 >= log_2 && log_3 == log_1 ) {
    console.log(1)
}
else{
    console.log(0)
};





//program that uses || -- or combine two conditions



if(log_1 < log_2  || log_3 < log_1 ) {
    console.log(1)
}
else{
    console.log(0)
};


//use !-- negate the condition
number1 = 10
number2 = 20

if(number1 != number2 ) {
    console.log("not equal")
}
else{
    console.log("Equal")
};


//The conditional (ternary) operator is the only JavaScript
// operator that takes three operands: a condition followed 
//by a question mark (?), then an expression to execute 
//if the condition is truthy followed by a colon (:), 
//and finally the expression to execute if the condition is falsy. 
//This operator is frequently used as an alternative to an if...else statement.

//Syntax
// 
// condition ? exprIfTrue : exprIfFalse

age = 17
const Drink_want = age >= 18 ? "WHisky": "Juice"
console.log(Drink_want) ;



//write a scrit to obtain differen arithmetic operations

const number_1 = 123
const number_2 = 345

console.log("Addition is:", number_1 + number_2)
console.log("Subtraction is:", number_1 - number_2)
console.log("Multiply is:", number_1 * number_2)
console.log("Remainder is:", number_1 % number_2)
;


// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions
// using logical operators, logging the results.

// Comparison and Logical Operators Script
const x = 15;
const y = 10;

console.log("x > y:", x > y);
console.log("x <= y:", x <= y);
console.log("x == y:", x == y);
console.log("x != y:", x != y);

console.log("x > 10 && x < 20:", x > 10 && x < 20);
console.log("x < 10 || x > 5:", x < 10 || x > 5);




// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

// Ternary Operator Script
const number = -7;
console.log(number >= 0 ? "The number is positive." : "The number is negative.");