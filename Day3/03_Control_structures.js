//Activity 1 (if else, write a program to check if a number is  positive, negative or zero and log the result)

// let num1= 2342342;


//     if(num1==0){
//         return console.log("Number is 0")
//     }
//     else if (num1 > 0){
//         return console.log("Number is Positive")
//     }
//     else {
//         return console.log("Number is Negative")
//     }
//     ;


//Task2 : write a program if a person is eligible for a vote age >=18


// age = 19
// let conclusion = age >=18 ? "Eligible for Vote": "Not Eligible for Vote"
// console.log(conclusion);


//Activity 2

// write a program to find largest of three numbers using nested else if statements

// number1 = 400
// number2 = 231
// number3 = 200


// if(number1>number2 && number1>number3){
//     console.log(number1, "is the largest")
// }
// else if(number2>number3 && number2>number1){
//     console.log(number2, "is the largest")
// }
// else{ console.log(number3, "is the largest")};


//Activity (Switch case)
//switch case: The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the expression's value.
//link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch 

//syntax:
//const expr = 'Papayas';
//switch (expr) {
//     case 'Oranges':
//       console.log('Oranges are $0.59 a pound.');
//       break;
//     case 'Mangoes':
//     case 'Papayas':
//       console.log('Mangoes and papayas are $2.79 a pound.');
//       // Expected output: "Mangoes and papayas are $2.79 a pound."
//       break;
//     default:
//       console.log(`Sorry, we are out of ${expr}.`);
//   }
  
//task1: write a program that uses a switch case to determine the day of a week, based on number1-7, and log the day name

// let day = 20
// switch(day){
//     case 1 :
//         console.log("The day is Monday")
//         break;
//     case 2 : 
//         console.log("The day is Tuesday")
//         break;
//     case 3 : 
//         console.log("The day is Wednesday")
//         break;
//     case 4:
//         console.log("The day is thursday")
//         break;
//     case 5:
//         console.log("The day is Friday")
//         break;
//     case 6:
//         console.log("the day is Saturday")
//         break;
//     case 7:
//         console.log("The day is sunday")
//         break;
//     default:
//         console.log("Please enter correct day")
//         break;
//     };




// Task 2: write a program to use a switch case to assign a grade(A, b, c,d,e) based on a score and log the grade.

let score = 45

switch(true){
    case score >= 90:
        console.log("A")
        break;
    case score >= 80:
            console.log("B")
            break;        
    case score >= 70:
            console.log("C")
            break;
    case score >= 50:
            console.log("D")
            break; 
    default:
        console.log("E")
        break;
        }

//conditional ternery operator, check the number is even or odd, 

let any_number = 43
result = any_number%2 == 0? "Even":"Odd"
console.log(result);

//Combining Conditions
//Task: write a program to check if a year is leap year using multiple conditions, 

// A year is a leap year if the following conditions are satisfied:

// The year is a multiple of 400.
// The year is a multiple of 4 and not a multiple of 100.



let year = 2004;

if (year % 4 == 0) {
	if (year % 100 == 0) {
		if (year % 400 == 0) {
			console.log("Leap year");
		} else {
			console.log("Not a leap year");
		}
	} else {
		console.log("Leap year");
	}
} else {
	console.log("Not a leap year");
}





