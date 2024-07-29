//Activity 1: Template Literals


//Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.


//Task1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.


const name = "Tinkal"
const age  =  29

const string = `My name is ${name} and I am ${age} years old.`

console.log(string);



//Task 2: create a multi line string using template literals and log it into the console.

const education = "B.Com"
const place = "Delhi"

const multi_line_string = `My name is ${name}.
My age is ${age}.
My higher education in ${education}
My place of leaving is in ${place}`

console.log(multi_line_string);




//Activity 2: Destructuring

//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.


//Task 3: Use array destructuring to extract the first and second elements from an array of the number and log the result in console.

const array1 = [1,2,3,4,5,6]

const[first, second] = array1

console.log(first, second);


//Task 4: Use Object destructuring to extract the title and author from a book object and log them in the console.

const object1 = {
    'title': 'Atmoic Habbit',
    'Year': 2005,
    'Author': 'Author'
}

const{title,Year,Author} = object1

console.log(title,Year,Author);



//Activity 3: Spread and Rest Operators

//Task 5: Use the spread operator to create a new array that includes all elements of the existing array plus additional element, and log the new array to the console.


const array2 = [3,4,5]
const new_arr = [...array2,6,5,53,3,4]

console.log(new_arr);


//Task 6: Use the rest operator in the function to accept an arbitrary number of arguments, sum them and return the result.



function sum(...args){
    total = 0
    for (i of args){
        total += i
    }
    return total
}

console.log(sum(1,2,3))



//Activity 4: Default Parameters

//Task 7: Write a function that takes two paramters and return thier product, with the second parameter having default value 1.
//Log the result by calling this function with and without the second parameter.


function example(x, y = 1){
    return x*y
}

console.log(4*5);
console.log(4);




//Activity 5: Enhanced Object literals.

//Task 8: Use enhanced object literals to create an object with methods and properties , and log the object in the console.







































