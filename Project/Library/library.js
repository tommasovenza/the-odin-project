let myLibrary = []
const resultsList = document.querySelector("#results > ul")
const allErrorsField = document.querySelectorAll(".error")

function showError(errorType) {
  // console.log(errorType)
  if (errorType === "wrong") {
    document.querySelector(".read .error").innerHTML =
      `<p style="color: red">write 'true' or 'false'</p>`

    setTimeout(() => {
      document.querySelector(".read > .error").innerHTML = ""
    }, 2000)
  } else {
    const errorField = document.querySelector(`.${errorType} > .error`)
    errorField.innerHTML = `<p style="color: red">${errorType} is missing</p>`

    setTimeout(() => {
      allErrorsField.forEach(error => (error.innerHTML = ""))
    }, 2000)
  }
}

function deleteBook(e) {
  if (e.target.classList.contains("btn-delete")) {
    console.log("delete")
    // remove from DOM
    e.target.closest("li").remove()
    // remove item from array
    const id = e.target.closest("div").dataset.id
    // remove item from array
    myLibrary = myLibrary.filter(item => item.id !== id)
  }

  if (e.target.classList.contains("btn-change")) {
    // get read
    let read = e.target.closest("div").dataset.read
    // change status
    if (read === "true") {
      read = "false"
      e.target.closest("div").dataset.read = read
      e.target.closest("div").querySelector(".to-change").innerHTML =
        "Mai letto 😔"
    } else if (read === "false") {
      read = "true"
      e.target.closest("div").dataset.read = read
      e.target.closest("div").querySelector(".to-change").innerHTML =
        "Letto! 😎"
    }
  }
}

function createNewBook(e) {
  // clean
  clean()
  // prevent Default Form Behaviour
  e.preventDefault()
  // getting values
  const title = document.querySelector("#title").value.trim()
  const author = document.querySelector("#author").value.trim()
  const pages = document.querySelector("#pages").value.trim()
  const read = document.querySelector("#read").value.trim()
  // validation
  if (title === "" || title === null) {
    showError("title")
    return
  } else if (author === "" || author === null) {
    showError("author")
    return
  } else if (pages === "" || pages === null) {
    showError("pages")
    return
  } else if (read === "" || read === null) {
    showError("read")
    return
  } else if (read !== "false" && read !== "true") {
    showError("wrong")
    return
  }
  // Create a new Book
  addBookToLibrary(title, author, pages, read)
  // Print all library
  printLibrary(myLibrary)
}

function clean() {
  document.querySelector("#title").value = ""
  document.querySelector("#author").value = ""
  document.querySelector("#pages").value = ""
  document.querySelector("#read").value = ""
}

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
  resultsList.innerHTML = ""

  // loop
  arrayBooks.forEach(book => {
    const li = document.createElement("li")
    li.innerHTML = `
    <div data-id="${book.id}" data-read="${book.read}">
        <span>Title: ${book.title},</span>
        <span>Author: ${book.author},</span> 
        <span>Number of Pages: ${book.pages},</span>
        <span class="to-change">Read: ${book.read === "true" ? "Letto! 😎" : "Mai letto 😔"},</span>
        <span>id: ${book.id}</span>
        <button class="btn-delete">Delete</button>
        <button class="btn-change">Change Read Status</button></span>
    </div>
    `
    resultsList.appendChild(li)
  })
}

function init() {
  document.querySelector("#show-form").addEventListener("click", () => {
    document.querySelector(".lateral-bar").classList.add("active")
  })

  document
    .querySelector("#create-new-btn")
    .addEventListener("click", createNewBook)

  resultsList.addEventListener("click", deleteBook)

  addBookToLibrary("Altà Fedeltà", "Nick Horby", 300, "true")
  addBookToLibrary("50 Sfumature di Grigio", "Unkwnown", 100, "false")
  addBookToLibrary("Grande Fratello", "George Orwell", 257, "true")

  printLibrary(myLibrary)
}

init()
