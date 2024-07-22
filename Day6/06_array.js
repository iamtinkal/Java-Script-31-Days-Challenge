//Activity 1: Array creation and ACess
//Task1: Create an array from 1 to 5

let array1 = [1,2,3,4,5]
console.log(array1);

//Task2: Acess the first and last elements of this array

//first elememt
console.log(array1[0]);

//last elememt
console.log(array1[array1.length - 1]);

//Activity 2: Array Methods

//Task 3: use the push method to add a new number to the end of the array and log the updated array.

array1.push(6)
console.log(array1);

//Task4: use the pop method to remove last element.

array1.pop()
console.log(array1);

//Task 5: use the shift method to remove first element and log the result

array1.shift()
console.log(array1);


//Task 6: use the unshift method to add a new number 

array1.unshift(1)
console.log(array1);