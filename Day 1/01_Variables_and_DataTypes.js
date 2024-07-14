
//Day 1- Variables and Data Types 

//Activity-1
    //Task 1: 

    var num1 = 1234;

//Task 2:  assign a variable usng let, let is a latest keyword to store a varibale, we have to use let instead of Var every time

let string_1 = "My Name is Tinkal."

console.log(num1);





console.log(string_1);


//Activity 2: assign constant value, constant means it can not be changed


const i = true;
console.log(i)



//Activity 3: assign diff. data types and log the type of the variables


//num -- its a number
let j = 829;
console.log(typeof(j));


//string ---its a string
let any_string = "Hello World!";
console.log(typeof(any_string));

//boolean -- its a boolean
let bool_val = false;
console.log(typeof(bool_val));

//float -- its showing a number
let any_float = 3.56
console.log(typeof(any_float));


//object -- object datatype is kind of dictonary in Python
let any_object = {fruit:'mango', color:'Yellow'}
console.log(typeof(any_object));

//array
let any_array = ['1', '2', 3, '5', 'yes']
console.log(typeof(any_array))


// Array
let arrTypeDate = ["a", "b", "c", "d", "e"];
console.log(typeof arrTypeDate);



//reassign  the initail values and print bth

let var_1 = "Mango"
var_1 = "Orange"
console.log(var_1);


//reassign var in const and understand the error

const con_1 = "Mango"
con_2 = "Orange"
con_2 = "Potato"
console.log(con_2);



// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.


//Feature Request: write a script to declare diff var and type of each var in log

let variable_1 = 1234
let variable_2 = "My name Is Tinkal"
let variable_3 = true
let variable_4 = {name:'Tinkal', age: 30, gender: 'M'}
//let variable_5 = new date("2024-07-01")





console.log(variable_1 + " is a "+ typeof(variable_1));
console.log(variable_2 + " is a "+ typeof(variable_2));
console.log(variable_3 + " is a "+ typeof(variable_3));
console.log(variable_4) + console.log(" is a "+ typeof(variable_4));


