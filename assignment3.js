/* 
Author: Munachimso Joshua Enabulele
Title: Assignment 3 - Library Management System
*/

// A blueprint for the book objects
class Book {

    // Initializing the private variable which cannot be changed without using the setter method
    #isbn

    // All Book objects must have these properties upon initialization
    constructor(title, author, available = true) {
        this.title = title
        this.author = author
        this.available = available
    }

    // Getter method for a book's ISBN
    get isbn() {
        return this.#isbn
    }

    // Setter method for a book's ISBN
    set isbn(value) {
        /* 
        Some validation for the ISBN.
        Checks for whether the ISBN value is a 13 digit number that begins with either 979 or 978 as ISBN are. If any of the checks is false then the ISBN is invalid.
        */
        if (
            !isNaN(Number(value)) && 
            typeof value === "number" && 
            String(value).length === 13 && 
            (
                String(value).slice(0, 3) === "978" || 
                String(value).slice(0, 3) === "979"
            )
        ) {
            this.#isbn = Number(value)
        } else {
            console.log("Invalid ISBN")
        }
    }

    // A method that allows users to borrow a book, by doing so the status of the availablity of the book gets evaluated to false.
    borrowBook() {
        if (this.available) {
            this.available = false
            console.log(`${this.title} by ${this.author} has been borrowed`)
        } else {
            console.log(`${this.title} by ${this.author} is not available`)
        }
    }

    // A method that allows users to return a book, by doing so the status of the availablity of the book gets evaluated to true.
    returnBook() {
        this.available = true
        console.log(`${this.title} by ${this.author} has been returned`)
    }
}


// A blueprint for library objects
class Library {
    constructor() {
        // The array which will contain the books added to the library
        this.books = []
    }

    // A method that adds a book to the library's collection of books
    addBook(book) {
        this.books.push(book)
    }

    // A method that removes a book from the library's collection of books
    removeBook(isbn) {
        let bookIsbn = isbn
        this.books.filter((book, index) => {
            if (book.isbn === bookIsbn) {
                this.books.splice(index, 1)
            }
        })
    }

    // A method that allows users to search for a book within the library by its title.
    findBookByTitle(title) {
        this.books.find((book) => {
            if (book.title === title) {
                // Once the book is found, its details will be logged to the console
                console.log("Searched book details:", book)
            }
        })
    }
}


// A blueprint for digital library objects
class DigitalLibrary extends Library {
    constructor() {
        // Inheriting all properties of the Library class
        super()
    }

    // A method that allows users to download a book from the digital library
    downloadBook(isbn) {

        // Using a try...catch block to handle unknown exceptions that may occur with regards to the ISBN
        try {
            let downloadableBook = this.books.find((book) => {
                return book.isbn === isbn
            })
            if (downloadableBook.available) {
                console.log(`${downloadableBook.title} by ${downloadableBook.author} is available for download`)
            } else {
                console.log(`${downloadableBook.title} by ${downloadableBook.author} is not available for download`)
            }
        } catch(err) {
            console.log("The requested ISBN is either invalid or not registered in the library")
        }
    }
}


// Testing the classes by cases - Book Class
let book1 = new Book("Little Red Riding Hood", "Brothers Grimm")
let book2 = new Book("Harry Potter", "J.K. Rowling")
let book3 = new Book("Three Blind Mice", "Thomas Ravenscroft")

// Assigning the ISBN
book1.isbn = 9781560257233
book2.isbn = 9793161484100
book3.isbn = 9780262134729

// Assigning a wrong ISBN. This is detected by the Book class isbn() setter method
book2.isbn = "97802jhhhgwe2" // logs out 'Invalid ISBN'
console.log("Book 2 ISBN:", book2.isbn) // book2 still retains its valid value

// Making use of the borrowBook() and returnBook() methods
book1.borrowBook() // book1 is no longer avialable because it has been borrowed
console.log("Book 1 Availability:", book1.available) // book1 is not available / logs out false
book1.returnBook() // book1 is now available because it has been returned
console.log("Book 1 Availability:", book2.available) // book1 is available / logs out true

// Testing the classes by cases - Library Class
let myLib = new Library()

// Adding books to the library using the addBook() method
myLib.addBook(book1)
myLib.addBook(book2)
myLib.addBook(book3)
console.log("My library consits of:", myLib.books) // a total of 3 books

// Removing books from the library by their ISBN using the removeBook() method
myLib.removeBook(book1.isbn)
console.log("My library now consists of", myLib.books) // now just 2 books

// Searching for a book by its title
myLib.findBookByTitle(book2.title) // Searches for 'Harry Potter'

// Testing the classes by cases - DigitalLibrary Class
myDigiLib = new DigitalLibrary()

// Adding books to the digital library using the addBook() method
myDigiLib.addBook(book1)
myDigiLib.addBook(book3)
myDigiLib.addBook(book2)

// Testing the downloadBook() method
myDigiLib.downloadBook(book2.isbn) // book2 is available hence it can be downloaded

// Testing the downloadBook() method when a book is not available
book1.borrowBook() // book1 is not avialable
myDigiLib.downloadBook(book1.isbn) // hence, it cannot be downloaded