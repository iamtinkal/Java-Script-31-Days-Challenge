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
