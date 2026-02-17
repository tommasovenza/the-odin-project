// Write a constructor for making “Book” objects.
// We will revisit this in the next project.
// Your book objects should have the book’s title, author, the number of pages, and whether or not
// you have read the book.
function Book(title, author, pages, read) {
  // throw an error
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor")
  }
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  Book.prototype.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read === false ? "not read yet!" : "just read!"}`
  }
}

const firstBook = new Book("50 Sfumature di Grigio", "Unknown", 400, false)
const secondBook = new Book("L'occhio del Lupo", "Daniel Pennac", 180, true)
// const wrong = Book("this is wrong", "wrong author", 300, false)

console.log(firstBook)
console.log(secondBook)
console.log(firstBook.info())
console.log(secondBook.info())
// console.log(wrong)
