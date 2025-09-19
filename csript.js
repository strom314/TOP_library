const library = [];

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

addBookToLibrary("Empire in black and gold", "Adrian Tschaikovsky", 388, "read");
addBookToLibrary("The air war", "Adrian Tschaikovsky", 543, "not read");
addBookToLibrary("Blood of the mantis", "Adrian Tschaikovsky", 453, "read");
