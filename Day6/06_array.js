//Activity 1: Array creation and ACess
//Task1: Create an array from 1 to 5

let array1 = [1,2,3,4,5]
console.log(array1);

//Task2: Acess the first and last elements of this array

//first elememt
console.log(array1[0]);

//last elememt
console.log(array1[array1.length - 1]);

//Activity 2: Array Methods (Basic)

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




//Activity 3: Array Methods (Intermediate)

// Task7: Use the map method to create a new array, where each number is doubled and log

//The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.


console.log(array2= array1.map((x) => x * 2))


//Task 8: Use the filter method to create a new array with only even numbers, log the array.

//The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

console.log(array1.filter((x)=> x%2==0));


//Task 9: use the reduce method to calculate the sum of all numbers in array and log the array.



const result = array1.reduce((x,y) =>   x + y)

console.log(result);



// Activity  4: array iteration

//Task 10:  Use a for loop iterate over the array and log each element.


 for(let n of array1){
    console.log(n); 
};



//Task 11: use a forEach method to iterate over the array and log  each elements.

    //The forEach() method of Array instances executes a provided function once for each array element.


array2.forEach((x) => console.log(x))


//Activity 5:  Multi Dimenstional Array

//Task 12: Create a two dimentional array (matrix) and log the entire array.

let array_2d = [
    ["John Doe", 20, 60, "A"],
    ["Jane Doe", 10, 52, "B"],
    ["Alice George", 28, 62, "A"],
    ["Petr Chess", 5, 24, "F"],
    ["Ling Jess", 28, 43, "A"],
    ["Ben Liard", 16, 51, "B"]
  ];

  console.table(array_2d);

  //Task 13: acess a specific element from the array

  console.log(array_2d[0][0])
