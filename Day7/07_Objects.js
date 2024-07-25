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
    name : 'patel_nagar',
    books: [{title1: 'Harypotter Part1', year: 2005, 'Author': 'J.K Rowlings'},
            {title: 'Harypotter Part2', year: 2007, 'Author': 'J.K Rowlings'},
            {title: 'Harypotter Part3', year: 2009, 'Author': 'J.K Rowlings'}
        ]
};

console.log(library);



//Activity 4: The "this" keyword:

//Task 7: Add a method to the book object that uses the this keyword to return a string with the books title and year, and log the result by calling this methid.


library.titleAndAuthor = function(){
    return `Title is: ${this.title1} `
}

console.log(library.titleAndAuthor());




