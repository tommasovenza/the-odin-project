const myLibrary = []
const resultsList = document.querySelector("#results > ul")

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(param1, param2, param3, param4) {
  // take params, create a book then store it in the array
  const newBook = new Book(param1, param2, param3, param4)
  const id = crypto.randomUUID()
  newBook.id = id
  //   push
  myLibrary.push(newBook)
}

function printLibrary(arrayBooks) {
  // loop
  arrayBooks.forEach(book => {
    const li = document.createElement("li")
    li.innerHTML = `
    <li>
        Title: ${book.title}, 
        Author: ${book.author}, 
        Number of Pages: ${book.pages}
        Read: ${book.read === true ? "Letto! 😎" : "Mai letto 😔"}
    </li>
    `
    resultsList.appendChild(li)
  })
}

addBookToLibrary("Altà Fedeltà", "Nick Horby", 300, true)
addBookToLibrary("50 Sfumature di Grigio", "Unkwnown", 100, false)
addBookToLibrary("Grande Fratello", "George Orwell", 257, true)

printLibrary(myLibrary)
