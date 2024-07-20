//Activity 1
//task1: write a program to print no 1 to 10 using loops

// for(i=1; i<=10; i++){
//     console.log(i)
// };

//task2: write a for loop to print the table of 5

// for(j=1; j<=10; j++){
//     console.log("5*", j, "=", j*5)
// };

//Activity 2(while loops)
//task3: write a program to calculate the sum of number   from 1 to 10 using while loop

// let k = 1
// let sum = 0
// while(k<=10){
//     sum += k
//     k++
// };
// console.log(sum);

//task 4: write a program to print no from 10 to 1 using while loops

// let l = 11
// while(l>=1){
//     l--
// console.log(l)
// };



//Activity 3: Do while loop
//task 5: write a program to print no from 1 to 5 using do while loop,

// let m = 1

// do {
//     console.log(m)
//     m++
// }while (m <= 5)


//task6: write a program to calclate a factorial a number using do while loop

// let anynumber = 5
// sum = 1
// do{    
//     sum *= anynumber
//     anynumber--
// }
// while(anynumber >= 1)
//     console.log(sum);

//Activity Nested Loops
//task 7: write a program to print a pattern

// for (let i = 1; i<=5; i++){
//     let pattern =" "
//         for(let j =1;j<=i ; j++){
//             pattern += '*'
//         }
//         console.log(pattern)
   
// }


//actvity 5 loop control statements:

//task  8: write a program to print number from 1 to 10 , but skip the number 5 using the continue statemnt.

//The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

// for (n = 1; n<=10 ; n++){
//     if (n === 5 ){
//         continue
//     }
//     console.log(n)
// }



//task9: write a program to print number from 1 to 10 but stop the loop when the number is 7 using break;

for (k = 1; k<= 10 ; k++){
    if(k === 7 ){
        break;
    }
    console.log(k)
}