const library = [];
const bookContainer = document.querySelector(".book-container");
const newBookBtn = document.querySelector("#new");
const submitBtn = document.querySelector("#submit");
const formContainer = document.querySelector(".form-container");

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.id = crypto.randomUUID();
}

function addBookToLibrary(name, author, pages, read) {
  book = new Book(name, author, pages, read);
  library.push(book);
}

addBookToLibrary(
  "Empire in black and gold",
  "Adrian Tschaikovsky",
  388,
  "read"
);
addBookToLibrary("The air war", "Adrian Tschaikovsky", 543, "not read");
addBookToLibrary("Blood of the mantis", "Adrian Tschaikovsky", 453, "read");

function displayBooks() {
  bookContainer.innerHTML = "";

  library.forEach((book) => {
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    let name = document.createElement("h2");
    name.textContent = book.name;
    let author = document.createElement("p");
    author.textContent = book.author;
    let pages = document.createElement("p");
    pages.textContent = book.pages;
    let read = document.createElement("p");
    read.textContent = book.read;

    bookCard.setAttribute("data-id", book.id);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove book";
    deleteBtn.addEventListener("click", removeBook);
    deleteBtn.setAttribute("data-id", book.id);

    bookCard.append(name, author, pages, read, deleteBtn);
    bookContainer.appendChild(bookCard);
  });
}

function removeBook(event) {
  let bookId = event.target.dataset.id;

  library.forEach((book) => {
    if (bookId === book.id) {
      library.splice(library.indexOf(book), 1);
    }
  });

  displayBooks();
}

displayBooks();

newBookBtn.addEventListener("click", () => {
  console.log("cc");
  if (formContainer.style.display === "flex") {
    formContainer.style.display = "none";
  } else {
    formContainer.style.display = "flex";
  }
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const bookForm = document.forms["add-form"];
  let name = bookForm.name.value;
  let author = bookForm.author.value;
  let pages = bookForm.pages.value;
  let read = "";
  if (bookForm.read.checked) {
    read = "read";
  } else {
    read = "not read";
  }

  addBookToLibrary(name, author, pages, read);
  formContainer.style.display = "none";
  displayBooks();
  bookForm.reset();
});
