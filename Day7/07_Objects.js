// Activity 1: Object creation and access

//task 1: Create an object represents Books properties, title, author, and year. log the object to the console.

const book_detail = {
    'Title' : 'Rich Dad Poor Dad', 'Author': 'Robert', 'Year' : 2005, 'Publisher' : 'thomson press'
}

console.log(book_detail);


//Task 2: Access the Title and author

console.log(book_detail.Title);
console.log(book_detail.Author);



// Activity 2: Object Methods

//Task 3: Add the method to the book object that returns a string, with books title and author, and log the result of callign this method.

book_detail.getTitleAuthor = function() {
    return (`Title is ${book_detail.Title} and Author is ${book_detail.Author}`)
}

console.log(book_detail.getTitleAuthor());


//Task 4: Add the method to the book object that takes a parameter year and update the books year property, then log the updated object.

book_detail.updateTheYear = function(year){
    book_detail.year  = year
}

book_detail.updateTheYear(2022)
console.log(book_detail.year);



//Activity 3: Nested Object

//Task 5: Create a nested object represting a library, with properties like name and books (an array of book object), and log the library object to the console.
//Task 6: Access and log the name of the library and title of all the books in the library.


let library = {
    name : 'Patel Nagar',
    Book_Titles : ['Harrypotter1', 'Harrpypotter2'],
    Book_Years : [2004,2007]

}

console.log(library);




//Activity 4: The "this" keyword:

//Task 7: Add a method to the book object that uses the this keyword to return a string with the books title and year, and log the result by calling this methid.


library.titleAndAuthor = function(){
    return `Title is: ${this.Book_Titles} and Years are: ${this.Book_Years} `
}

console.log(library.titleAndAuthor());




//Activity 5: Object Iteration

//Task 8: use a for..in loop to iterate over the property of the book object and log each propert and book value to the console.


for (property in book_detail){
    console.log(property , book_detail[property])
}


//Task 9: Use Object.keys and Object.values method to log all the keys and values of the object/

console.log(Object.keys(book_detail))
console.log(Object.values(book_detail))