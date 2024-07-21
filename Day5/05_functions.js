//activity1: function declaration
//task1: write a function to check if a number is even or odd and log the result to the console.

function is_even(any_number){
    if (any_number%2 === 0 ){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

is_even(4);


//task2: write a function to calculate a square of a number and return the result

function square(any_number2){
    console.log(any_number2 * any_number2)
};

square(10);


//Activity 2: function expression

//The function keyword can be used to define a function inside an expression.

// You can also define functions using the function declaration or the arrow syntax.



//task 3: Write a function expression to find the maximum of two numbers and log the result.


let max  =  function (x,y){
    if(x > y){
        console.log(x)
    }
    else{
        console.log(y)
    }
};

max(200,3);


//task 4: write a function expression to concat two strings

let concate = function(string1, string2){
    console.log(String(string1) + String(string2))
}

concate(4, 4)


//Activity 3: Arrow functions:

//Task 5:   write an arrow function to calclate, the sum of two numbers.
//=> -- expression

const arrow_func = (i, j) => console.log(i+j);//funct name is arrow_func followed by exression then statemnet

arrow_func(4,7);



//task 6: write an arrow function to check, if a string contains a specific character and return boolean.

// let any_string = "Hello Ji";

const string_check = (any_string, s) => console.log(any_string.includes(s) ? "true":"false")

string_check("Hello", "H");
    
//Activity 4: Function parameters and default values;
//task 7: Write a function that takes two parameters and return thier product. Provide a default value for the second param.


const default_val = 5;

function find_product(n){
    console.log(default_val * n);
}

find_product(10)


//task 8: Write a function that takes a person name, and age and return a greeting message. Provide a default value for the age.

function greeting(name, age = 28){
    console.log(`Hi ${name}, I know your age is ${age}`);
}

greeting("Tinkal");



//Activity 5: Higher Order Function:

//A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.

//Task 9: Write a higher order function, that takes a function and a number, and calls the function that many times.


function func(){
    Number(console.log("Hello Tinkal"))
};

function HOF(func, num){
   for(p=1; p<= num; p++){
    func()
   }
}

HOF(func, 4);


// //Task 10: Write a higher order function, that takes two function and value, applies the first function to the value, and then applies seconf function to the result.
// //not able to solved

// function func1(){
//     let result = b*10
// };

// function func2(){
//     result/2
// }

// function final_func(func1, func2, b){
//     func2();
// }

// final_func(func1, func2, 5)








